import json
import csv

with open("books.json", "r") as json_handle:
    data = json.load(json_handle)
    categories_dict = dict()
    for book in data:
        categories_book = book["categories"]
        for category in categories_book:
            categories_dict[category] = categories_dict.get(category, 0) + 1

    number_of_books = len(data)

with open("books.csv", "w") as csv_handle:
    writer = csv.writer(csv_handle)
    header = ("categoria", "porcentagem")
    writer.writerow(header)
    writer.writerows(
        (key, (value / number_of_books))
        for key, value in categories_dict.items()
    )
