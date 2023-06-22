orders = [
    ("fernanda", "rafa"),
    ("fran", "daniel"),
    ("miriam", "gabriel"),
    ("matheus", "yasmin"),
    ("giovanni", "fernanda"),
    ("rafa", "fran"),
    ("daniel", "miriam"),
    ("gabriel", "matheus"),
]

dictionary = {key: value for key, value in orders}
queue = [key for key in dictionary if key not in dictionary.values()]
for name in dictionary.keys():
    queue.append(dictionary[queue[len(queue) - 1]])

print(queue)
