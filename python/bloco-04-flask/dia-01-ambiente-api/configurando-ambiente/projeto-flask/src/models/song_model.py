import random
from .db import db
from .abstract_model import AbstractModel


class SongModel(AbstractModel):
    _collection = db["songs"]

    def __init__(self, data: dict):
        super().__init__(data)

    @classmethod
    def get_random(cls):
        data = cls.find()
        if not data:
            return
        return random.choice(data)

    def to_dict(self):
        return {
            "_id": str(self.data["_id"]),
            "song": self.data["song"],
        }
