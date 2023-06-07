# 1 - OK
# 0 - Instabilidades

# valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

# valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4


def max_stability_period(values):
    string = str()
    for value in values:
        string += str(value)

    list_stability_periods = [seq for seq in string.split("0") if seq]

    max_length = 0
    for item in list_stability_periods:
        if len(item) > max_length:
            max_length = len(item)

    return max_length


print(max_stability_period([1, 1, 1, 1, 0, 0, 1, 1]))
