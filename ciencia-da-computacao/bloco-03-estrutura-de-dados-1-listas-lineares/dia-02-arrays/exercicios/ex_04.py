# entradas = [1, 2, 3]
# saidas = [3, 2, 7]
# instante_buscado = 4
# resultado: 1

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.


def find_students_in_library(entries, exits, moment):
    list_ranges = list()
    for i in range(len(entries)):
        list_ranges.append((entries[i], exits[i]))

    result = 0

    for tuple in list_ranges:
        if tuple[0] <= moment <= tuple[1]:
            result += 1

    return result


print(find_students_in_library([1, 2, 3], [3, 2, 7], 4))
