from util import date_today, date_yesterday
from database.models import GuessChampion, Champion, Trait
from database.connection import db_connect
from util import GuessType
from flask import abort
from typing import List
import uuid

def select_champion_names_with_one_same_trait_in_set():
    conn, cur = db_connect()

    cur.execute(f"""SELECT c.name, c1.name 
                    FROM guess_champion gc
                    LEFT JOIN champion c 
                    ON c.id = gc.champion_id
                    LEFT JOIN champion_traits ct
                    ON ct.champion_id = c.id
                    LEFT JOIN champion_traits ct1
                    ON ct1.trait_id = ct.trait_id
                    LEFT JOIN champion c1
                    ON ct1.champion_id = c1.id
                    WHERE gc.date='{date_today()}'
                    AND gc.guess_type='{GuessType.TRAIT.value}'
                    AND c1.set = c.set
                    """)

    data = cur.fetchall()

    filter_name = data[0][0]
    parsed = list(map(lambda d: d[1], data))
    filtered_parsed = list(set(item for item in parsed if item != filter_name))

    conn.close()
    cur.close()
    return filtered_parsed

def select_correct_guesses_count(guess_type) -> int:
    conn, cur = db_connect()
    cur.execute(f"SELECT COUNT(*) FROM correct_guess WHERE guess_type='{guess_type}'")
    total = cur.fetchone()[0]
    conn.close()
    cur.close()
    return total

def select_trait_by_id(trait_id) -> Trait:
    conn, cur = db_connect()
    cur.execute(f"SELECT * FROM trait WHERE id='{trait_id}'")
    trait_data = cur.fetchone()
    conn.close()
    cur.close()
    
    if trait_data == None:
        abort(404)
    
    return Trait(trait_data)

def select_champion_by_id(champion_id) -> Champion:
    conn, cur = db_connect()

    cur.execute(f"""SELECT c.*, t.*
                    FROM champion c
                    LEFT JOIN champion_traits ct ON c.id = ct.champion_id
                    LEFT JOIN trait t ON ct.trait_id = t.id
                    WHERE c.id='{champion_id}'""")

    data = cur.fetchall()

    if len(data) == 0:
        abort(404)

    champion_data = data[0]
    traits = list(map(lambda d: Trait((d[6], d[7])), data))

    conn.close()
    cur.close()

    return Champion(champion_data, traits)


def select_random_champion() -> Champion:
    conn, cur = db_connect()
    cur.execute("SELECT id FROM champion ORDER BY RANDOM() LIMIT 1")
    id_data = cur.fetchone()
    conn.close()
    cur.close()
    return select_champion_by_id(id_data[0])

def select_champions_by_name_query(query, exclude_ids: List[str] = []) -> List[Champion]:
    conn, cur = db_connect()

    exclude_condition = ""

    if len(exclude_ids) > 0 and exclude_ids:
        quoted_exclude_ids = ", ".join([f"'{str(uuid.UUID(exclude_id))}'" for exclude_id in exclude_ids])
        exclude_condition = f" AND id NOT IN ({quoted_exclude_ids}) "

    cur.execute(f"SELECT * FROM champion WHERE name LIKE '%{query}%'{exclude_condition}FETCH FIRST 20 ROWS ONLY")
    champions_data = cur.fetchall()
    conn.close()
    cur.close()
    return list(map(lambda data: Champion(data), champions_data))

def select_traits_by_name_query(query, exclude_ids: List[str] = []) -> List[Trait]:
    conn, cur = db_connect()
    
    exclude_condition = ""

    if len(exclude_ids) > 0 and exclude_ids:
        quoted_exclude_ids = ", ".join([f"'{str(uuid.UUID(exclude_id))}'" for exclude_id in exclude_ids])
        exclude_condition = f" AND id NOT IN ({quoted_exclude_ids}) "

    cur.execute(f"SELECT * FROM trait WHERE name LIKE '%{query}%'{exclude_condition}FETCH FIRST 20 ROWS ONLY")
    traits_data = cur.fetchall()
    conn.close()
    cur.close()
    return list(map(lambda data: Trait(data), traits_data))

def select_guess_champion(guess_type_value: str, date: str) -> GuessChampion or None:
    conn, cur = db_connect()

    cur.execute(f"""SELECT COUNT(*) 
                FROM guess_champion
                WHERE guess_type='{guess_type_value}'
                """)
    
    total = cur.fetchone()[0]

    cur.execute(f"""SELECT gc.*, c.*, t.*
                FROM guess_champion gc
                LEFT JOIN champion c
                ON gc.champion_id = c.id
                LEFT JOIN champion_traits ct ON gc.champion_id = ct.champion_id
                LEFT JOIN trait t ON ct.trait_id = t.id
                WHERE date='{date}' 
                AND guess_type='{guess_type_value}'
                """)

    data = cur.fetchall()

    if data == None or len(data) == 0:
        return None

    traits = list(map(lambda d: Trait((d[10], d[11])), data))
    guess_champion_data = data[0]

    conn.close()
    cur.close()



    return GuessChampion(guess_champion_data, total, traits)

def select_guess_champion_today(guess_type: GuessType) -> GuessChampion or None:
    return select_guess_champion(guess_type, date_today())

def select_guess_champion_yesterday(guess_type: GuessType) -> GuessChampion or None:
    return select_guess_champion(guess_type, date_yesterday())
