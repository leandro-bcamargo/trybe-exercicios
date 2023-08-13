from .db import db
from pymongo import ReturnDocument


class StudentModel:
    _collection = db["students"]

    def __init__(self, data):
        self.data = data

    def save(self):
        result = self._collection.insert_one(self.data)

        inserted_doc = self._collection.find_one({"_id": result.inserted_id})

        self.data = inserted_doc

        return self.data

    def update(self, data):
        result = self._collection.find_one_and_update(
            {"_id": self.data["_id"]},
            {"$set": data},
            return_document=ReturnDocument.AFTER,
        )

        self.data = result

        return self.data

    def delete(self):
        self._collection.delete_one({"_id": self.data["_id"]})

    @classmethod
    def find_all(cls):
        data = cls._collection.find()
        return [cls(doc) for doc in data]

    @classmethod
    def find_one(cls, query):
        data = cls._collection.find_one(query)
        return cls(data) if data else None

    def to_dict(self):
        return {
            "id": self.data["_id"],
            "name": self.data["name"],
            "enrollment": self.data["enrollment"],
        }
