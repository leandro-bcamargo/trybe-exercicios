# Exemplo 1:
# produtos = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

# Exemplo 2:
# produtos = [1, 1, 2, 3]
# resultado = 1
# Os índices (0, 1) formam a única combinação.


def find_combinations(list_numbers):
    list_tuples = list()

    for i in range(len(list_numbers)):
        for j in range(i + 1, len(list_numbers)):
            if list_numbers[i] == list_numbers[j]:
                list_tuples.append((i, j))

    return len(list_tuples)


print(find_combinations([1, 3, 1, 1, 2, 3]))
