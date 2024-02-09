from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.cron import CronTrigger
from database.insert import insert_guess_champions_if_not_exists

trigger = CronTrigger(
    year="*", month="*", day="*", hour="0", minute="0", second="*"
)

update_guesses_scheduler = BackgroundScheduler()
update_guesses_scheduler.add_job(insert_guess_champions_if_not_exists, trigger=trigger)