text = [
    "Ana",
    "ama",
    "Joao",
    "que",
    "ama",
    "Jose",
    "mas",
    "Jose",
    "nao",
    "ama",
    "Ana",
]


def sort_by_first_letter(list):
    dictionary = dict()
    for word in list:
        first_char = word[0].lower()
        if first_char not in dictionary:
            dictionary[first_char] = []
        dictionary[first_char].append(word)

    return dictionary


for key, value in sort_by_first_letter(text).items():
    print(f"{key}: {value}")
