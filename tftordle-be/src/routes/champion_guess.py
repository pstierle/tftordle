from flask import Blueprint, jsonify, request, abort
from util import GuessType, common_member, crop_and_blur, mask_string
from database.insert import insert_correct_guess
from database.select import select_correct_guesses_count, select_guess_champion_today, select_guess_champion_yesterday, select_champion_by_id, select_champions_by_name_query
from database.scheduler import update_guesses_scheduler
import collections
from PIL import Image, ImageFilter
from os import path
import base64
import io

champion_guess_router = Blueprint("champion_guess_router", __name__)

@champion_guess_router.route("/victory-data", methods=["GET"])
def victory_data():
    return {
        "nextUpdateDate": update_guesses_scheduler.get_jobs()[0].next_run_time,
        "correctGuessesCount": select_correct_guesses_count(GuessType.CHAMPION.value),
        "correctGuess": select_guess_champion_today(GuessType.CHAMPION.value).champion.serialize()
    }
    
@champion_guess_router.route("/correct-guess-count", methods=["GET"])
def correct_guess_count():
    return {
        "count": select_correct_guesses_count(GuessType.CHAMPION.value)
    }

@champion_guess_router.route("/last", methods=["GET"])
def last_champion():
    return jsonify(select_guess_champion_yesterday(GuessType.CHAMPION.value).serialize())

@champion_guess_router.route("/query-champions", methods=["POST"])
def query_champions():
    try:
        body = request.get_json()
        query = body['query']
        exclude_ids = body['alreadyGuessedIds']
        return jsonify(list(map(lambda champion: champion.serialize(), select_champions_by_name_query(query, exclude_ids))))  
    except KeyError:
        abort(400)
        
@champion_guess_router.route("/stat-clue", methods=["GET"])
def trait_clue():
    champion = select_guess_champion_today(GuessType.CHAMPION.value).champion
    trait_first_chars = list(map(lambda trait: mask_string(trait.name), champion.traits))

    return {
            "set": champion.set,
            "traitsFirstChars": trait_first_chars,
    }
    

@champion_guess_router.route("/icon-clue", methods=["POST"])
def icon_clue():
    champion = select_guess_champion_today(GuessType.CHAMPION.value).champion
    try:
        body = request.get_json()
        try_count = body['tryCount']
        clean_name = ''.join(champion.name.split()).replace("`", "").replace(".", "")
        champion_icon = Image.open(path.abspath(f'src/static/champions/{clean_name.lower()}_set_{champion.set[0]}.png'))
        icon_width, icon_height = champion_icon.size
        icon_byte_arr = io.BytesIO()
        crop_data = None
        if 0 <= try_count - 1 < len(crop_and_blur):
            crop_data = crop_and_blur[try_count - 1]
        else:
            crop_data = crop_and_blur[len(crop_and_blur) - 1]
        
        champion_icon.crop((0, 0, icon_width // crop_data["crop"], icon_width // crop_data["crop"])).filter(ImageFilter.BoxBlur(crop_data["blur"])).save(icon_byte_arr, format='PNG')
        encoded_icon = base64.encodebytes(icon_byte_arr.getvalue()).decode('ascii')
        return {
            "icon": encoded_icon
        }
    except KeyError:
        abort(400)    


@champion_guess_router.route("/check", methods=["POST"])
def check():
    champion = select_guess_champion_today(GuessType.CHAMPION.value).champion
    print(f"Todays Champion Guess Champion: {champion.name} Set {champion.set}")
    try:
        body = request.get_json()
        guess_id = body['guessId']
        guessed_champion = select_champion_by_id(guess_id)
        champion_traits = list(map(lambda x: x.id, champion.traits))
        guessed_champion_traits = list(map(lambda x: x.id, guessed_champion.traits))
        correct = False
        
        if champion.id == guessed_champion.id:
            correct = True
            insert_correct_guess(GuessType.CHAMPION.value)
            
        set = "exact"
        cost = "exact"
        range = "exact"
        traits = "wrong"
        gender = "wrong"
        
        if champion.gender == guessed_champion.gender:
            gender = "exact"
            
        if float(champion.set) < float(guessed_champion.set):
            set = "lower"
        if float(champion.set) > float(guessed_champion.set):
            set = "higher"

        if float(champion.cost) < float(guessed_champion.cost):
            cost = "lower"
        if float(champion.cost) > float(guessed_champion.cost):
            cost = "higher"
                
        if float(champion.range) < float(guessed_champion.range):
            range = "lower"
        if float(champion.range) > float(guessed_champion.range):
            range = "higher"
                
        if common_member(champion_traits, guessed_champion_traits):
            traits = "some"
            
        if collections.Counter(champion_traits) == collections.Counter(guessed_champion_traits):
            traits = "exact"
                    
        return {
            "correct": correct,
            "guess": guessed_champion.serialize(),
            "set": set,
            "cost": cost,
            "range": range,
            "traits": traits,
            "gender": gender,
        }
    except KeyError:
        abort(400)
    

    
    


    