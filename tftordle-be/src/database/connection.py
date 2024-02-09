from os import environ, path
import uuid
import psycopg2 
import json
import time

def db_connect():
        conn = psycopg2.connect(database=environ['DB_DATABASE'],  
                                user=environ['DB_USER'], 
                                password=environ['DB_PASSWORD'],  
                                host=environ['DB_HOST'], 
                                port=environ['DB_PORT']) 
        cur = conn.cursor()
        return conn, cur

def init_database():
    print("Initializing Database...")
    conn, cur = db_connect()
    cur.execute("CREATE TABLE IF NOT EXISTS trait (id varchar, name varchar)")
    cur.execute("CREATE TABLE IF NOT EXISTS correct_guess (id varchar, user_id varchar, date varchar, guess_type varchar)")
    cur.execute("CREATE TABLE IF NOT EXISTS champion (id varchar, name varchar, \"set\" varchar, cost varchar, range varchar, gender varchar)")
    cur.execute("CREATE TABLE IF NOT EXISTS guess_champion (id varchar, date varchar, guess_type varchar, champion_id varchar)")
    cur.execute("CREATE TABLE IF NOT EXISTS champion_traits (champion_id varchar, trait_id varchar)")
    conn.commit()
    cur.close()
    conn.close()

def already_imported(name, set, all):
    for champion in all:
        if str(name) == str(champion.name) and str(set) == str(champion.set):
            return True
        
    return False

def sync_data():
    print("Starting sync...")
    start_time = time.time()

    data = json.load(open(path.abspath('src/database/champions.json')))

    conn, cur = db_connect()

    for champion in data:
        champion_name = champion["name"]
        champion_set = champion["set"]

        cur.execute(f"SELECT id from champion WHERE name='{champion_name}' AND set='{champion_set}'")
        
        champion_data = cur.fetchone()

        if champion_data == None:
            print(f"Creating Champion {champion_name} Set {champion_set}")
            champion_cost = champion["cost"]
            champion_range = champion["range"]
            champion_gender = champion["gender"]
            champion_id = str(uuid.uuid4())
            cur.execute(f"INSERT INTO champion (id, name, \"set\", cost, range, gender) VALUES('{champion_id}', '{champion_name}', '{champion_set}', '{champion_cost}', '{champion_range}', '{champion_gender}')")
            conn.commit()

            champion_trait_names = champion["traits"]

            for trait_name in champion_trait_names:
                cur.execute(f"SELECT id from trait WHERE name='{trait_name}'")
                trait_data = cur.fetchone()
                if trait_data == None:
                    print(f"Creating Trait {trait_name}")
                    trait_id = str(uuid.uuid4())
                    cur.execute(f"INSERT INTO trait (id, name) VALUES('{trait_id}', '{trait_name}')")
                    conn.commit()
                else:
                    trait_id = trait_data[0]

                cur.execute(f"INSERT INTO champion_traits (champion_id, trait_id) VALUES('{champion_id}', '{trait_id}')")
                conn.commit()

    cur.close()
    conn.close()
    print(f"Sync finished in: {round(time.time() - start_time, 1)} seconds.")

            