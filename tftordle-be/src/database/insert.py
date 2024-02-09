from database.connection import db_connect
from util import date_today, date_yesterday, GuessType
from database.select import select_guess_champion, select_random_champion
import uuid

    
def insert_correct_guess(guess_type) -> None:
    conn, cur = db_connect()
    cur.execute(f"INSERT INTO correct_guess (id, user_id, date, guess_type) VALUES('{str(uuid.uuid4())}', '{None}', '{date_today()}', '{guess_type}')")
    conn.commit()
    cur.close()
    conn.close()

def insert_guess_champion(id, date, guess_type, champion_id) -> None:
    conn, cur = db_connect()
    cur.execute(f"INSERT INTO guess_champion (id, date, guess_type, champion_id) VALUES('{id}', '{date}', '{guess_type}', '{champion_id}')")
    conn.commit()
    cur.close()
    conn.close()

def insert_guess_champions_if_not_exists() -> None:
    for date in [date_today(), date_yesterday()]:
        for guess_type in GuessType:
            found = select_guess_champion(guess_type.value, date)
            if found is None:
                random_champion = select_random_champion()
                insert_guess_champion(id=str(uuid.uuid4()), date=date, guess_type=guess_type.value, champion_id=random_champion.id)
    



