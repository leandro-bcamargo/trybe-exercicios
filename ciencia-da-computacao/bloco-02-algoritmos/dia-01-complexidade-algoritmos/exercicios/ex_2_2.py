import random


def random_averages(n):
    list_of_averages = list()

    for _ in range(100):
        average = 0
        for _ in range(n):
            average += random.randrange(1, n)
        average /= n
        list_of_averages.append(average)

    return list_of_averages


print(random_averages(10))
