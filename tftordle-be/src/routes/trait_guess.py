from flask import Blueprint, request, abort, jsonify
from util import GuessType, mask_string
from database.insert import insert_correct_guess
from database.select import select_correct_guesses_count, select_traits_by_name_query, select_trait_by_id, select_guess_champion_today, select_guess_champion_yesterday, select_champion_names_with_one_same_trait_in_set
from database.scheduler import update_guesses_scheduler

trait_guess_router = Blueprint("trait_guess_router", __name__)

@trait_guess_router.route("/victory-data", methods=["GET"])
def victory_data():
    guess_champion = select_guess_champion_today(GuessType.TRAIT.value)
    
    return {
        "nextUpdateDate": update_guesses_scheduler.get_jobs()[0].next_run_time,
        "correctGuessesCount": select_correct_guesses_count(GuessType.TRAIT.value),
        "correctGuess": list(map(lambda trait: trait.serialize(), guess_champion.champion.traits))
    }

    
@trait_guess_router.route("/correct-guess-count", methods=["GET"])
def correct_guess_count():
    return {
        "count": select_correct_guesses_count(GuessType.TRAIT.value)
    }

@trait_guess_router.route("/champion", methods=["GET"])
def champion():
    champion = select_guess_champion_today(GuessType.TRAIT.value).champion
    
    return {
        "name": champion.name,
        "set": champion.set,
        "icon": champion.icon
    }

@trait_guess_router.route("/last", methods=["GET"])
def last_champion():
    return jsonify(select_guess_champion_yesterday(GuessType.TRAIT.value).serialize())

@trait_guess_router.route("/stat-clue", methods=["GET"])
def stat_clue():
    champion = select_guess_champion_today(GuessType.TRAIT.value).champion
    trait_first_chars = list(map(lambda trait: mask_string(trait.name), champion.traits))

    return {
            "cost": champion.cost,
            "traitsFirstChars": trait_first_chars,
    }
    
@trait_guess_router.route("/same-trait-clue", methods=["GET"])
def same_trait_clue():
    names = select_champion_names_with_one_same_trait_in_set()    
    return {
        'championNamesWithSameTrait': names
    }

@trait_guess_router.route("/check", methods=["POST"])
def check_guess():
    champion = select_guess_champion_today(GuessType.TRAIT.value).champion
    print(f"Todays Trait Guess Traits: {champion.serialize()}")
    try:
        body = request.get_json()
        correct_count = body['correctGuessChecksCount']
        guess_id = body['guessId']
        correct = False
        finished = False
        guessed_trait = select_trait_by_id(guess_id)
        
        for trait in champion.traits:
            if trait.id == guessed_trait.id:
                correct = True
        
        if correct is True:
            if len(champion.traits) == correct_count + 1:
                finished = True
                
        if finished is True:
            insert_correct_guess(GuessType.TRAIT.value)
        
        return jsonify({
            'correct': correct,
            'guess': guessed_trait.serialize(),
            'finished': finished,
        })    
    except KeyError:
        abort(400)


@trait_guess_router.route("/query-traits", methods=["POST"])
def query_traits():
    try:
        body = request.get_json()
        query = body['query']
        exclude_ids = body['alreadyGuessedIds']

        return jsonify(list(map(lambda trait: trait.serialize(), select_traits_by_name_query(query, exclude_ids))))  
    except KeyError:
        abort(400)

    