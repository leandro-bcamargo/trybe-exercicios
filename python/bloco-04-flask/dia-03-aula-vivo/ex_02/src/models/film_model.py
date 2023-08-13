from .db import db
from bson.objectid import ObjectId


class FilmModel:
    _collection = db["films"]

    def __init__(self, data) -> None:
        self.data = data

    @classmethod
    def search_film_by_title(cls, title):
        if not title:
            return [cls(film) for film in cls._collection.find()]

        data = cls._collection.find_one({"title": title})
        return cls(data) if data else None

    @classmethod
    def search_film_by_id(cls, id):
        data = cls._collection.find_one({"_id": ObjectId(id)})

        return cls(data) if data else None

    def to_dict(self):
        return {
            "title": self.data["title"],
            "year": self.data["year"],
            "director": self.data["director"],
            "genre": self.data["genre"],
            "poster": self.data["poster"],
            "_id": self.data["_id"],
        }
