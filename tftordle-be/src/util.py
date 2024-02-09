from enum import Enum
from datetime import date, timedelta, datetime
from os import environ

class GuessType(Enum):
    TRAIT = "TRAIT"
    CHAMPION = "CHAMPION"
        
def date_yesterday():
    d = date.today() - timedelta(days=1)
    return d.isoformat()
    
def date_today():
    return date.today().isoformat()

def get_champion_icon(name: str, set: str) -> str:
    clean_name = ''.join(name.split())
    clean_name = clean_name.replace("`", "")
    clean_name = clean_name.replace(".", "")
    return f"{environ['HOST_URL']}/static/champions/{clean_name.lower()}_set_{set[0]}.png"

def get_trait_icon(name) -> str:
    clean_name = ''.join(name.split())
    clean_name = ''.join(clean_name.split('.'))
    clean_name = clean_name.replace("-", "")
    clean_name = clean_name.replace(":", "")
    return f"{environ['HOST_URL']}/static/traits/{clean_name.lower()}.png"

def common_member(a, b):
    a_set = set(a)
    b_set = set(b)
    if len(a_set.intersection(b_set)) > 0:
        return True
    return False  

def mask_string(input_str):
    result = ""
    for word in input_str.split():
        if len(word) > 1:
            result += word[0] + '_' * (len(word) - 1) + ' '
        else:
            result += word + ' '
    return result.rstrip()  

crop_and_blur = [
    {
        "crop": 2,
        "blur": 12,
   },
    {
        "crop": 1.9,
        "blur": 11,
   },
    {
        "crop": 1.8,
        "blur": 10,
   },
   {
        "crop": 1.7,
        "blur": 9,
   },
   {
        "crop": 1.6,
        "blur": 8,
   },
   {
        "crop": 1.5,
        "blur": 7,
   },
   {
        "crop": 1.4,
        "blur": 6,
   },
   {
        "crop": 1.3,
        "blur": 5,
   },
   {
        "crop": 1.2,
        "blur": 4,
   },
   {
        "crop": 1.1,
        "blur": 3,
   },
   {
        "crop": 1,
        "blur": 2,
   },
      {
        "crop": 1,
        "blur": 0,
   }
]
               





