# Exemplo 1:
# cartas = [2, 6, 4, 5]
# cartas por parte = 2

# resultado = [2, 4, 6, 5]

# Exemplo 2:
# cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3

# resultado = [1, 7, 4, 6, 4, 6]


def shuffle(cards_list):
    half_index = len(cards_list) // 2
    first_half, second_half = cards_list[:half_index], cards_list[half_index:]
    result = list()

    for i in range(half_index):
        result += [first_half[i], second_half[i]]

    return result


print(shuffle([1, 4, 4, 7, 6, 6]))
print(shuffle([2, 6, 4, 5]))
