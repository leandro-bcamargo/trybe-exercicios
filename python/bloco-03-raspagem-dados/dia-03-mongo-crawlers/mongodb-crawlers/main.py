from pymongo import MongoClient

client = MongoClient()
db = client.catalogue
students = db.books
documents = [
    {
        "title": "A Light in the Attic",
    },
    {
        "title": "Tipping the Velvet",
    },
    {
        "title": "Soumission",
    },
]
# document_id = db.books.insert_one(book).inserted_id
db.books.insert_many(documents)
# print(document_id)
client.close()
