from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from routes.trait_guess import trait_guess_router
from routes.champion_guess import champion_guess_router
from database.insert import insert_guess_champions_if_not_exists
from database.scheduler import update_guesses_scheduler
from database.connection import init_database, sync_data
import atexit

load_dotenv()

app = Flask(__name__)
app.secret_key = "tftordle"

app.register_blueprint(trait_guess_router, url_prefix='/trait-guess')
app.register_blueprint(champion_guess_router, url_prefix='/champion-guess')

cors = CORS(app)

with app.app_context():
    init_database()
    sync_data()
    insert_guess_champions_if_not_exists()
    update_guesses_scheduler.start()
    
atexit.register(lambda: update_guesses_scheduler.shutdown())

# when starting from docker container
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
