from util import get_champion_icon, get_trait_icon

class Trait:
    def __init__(_self, data):
        _self.id = data[0]
        _self.name = data[1]
        _self.icon = get_trait_icon(_self.name)

    def serialize(_self):
        return {
            "id": _self.id,
            "name": _self.name,
            "icon": _self.icon
        }

class Champion:
    def __init__(_self, _data, _traits = []):
        _self.id = _data[0]
        _self.name = _data[1]
        _self.set = _data[2]
        _self.cost = _data[3]
        _self.range = _data[4]
        _self.gender = _data[5]
        _self.icon = get_champion_icon(_self.name, _self.set)
        _self.traits = _traits

    def serialize(_self):
        return {
            "id": _self.id,
            "name": _self.name,
            "set": _self.set,
            "cost": _self.cost,
            "range": _self.range,
            "gender": _self.gender,
            "icon": _self.icon,
            "traits": list(map(lambda trait: trait.serialize(), _self.traits)),
        }

class GuessChampion:
    def __init__(_self, _data, _total, _traits = []):
        _self.id = _data[0]
        _self.date = _data[1]
        _self.guess_type = _data[2]
        _self.champion_id = _data[3]
        _self.champion = Champion((_data[4], _data[5], _data[6], _data[7], _data[8], _data[9]), _traits)
        _self.total = _total

    def serialize(_self):
        return {
            "id": _self.id,
            "date": _self.date,
            "guess_type": _self.guess_type,
            "champion_id": _self.champion_id,
            "champion": _self.champion.serialize(), 
            "total": _self.total
        }
