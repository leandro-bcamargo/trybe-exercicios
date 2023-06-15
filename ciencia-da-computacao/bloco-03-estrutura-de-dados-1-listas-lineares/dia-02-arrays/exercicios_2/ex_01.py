# 1 - OK
# 0 - Instabilidades

# valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

# valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4


def get_max_stability_time(array):
    outer_array = list()
    inner_array = list()

    for index in range(len(array)):
        if array[index] == 1:
            inner_array.append(array[index])
            if index == len(array) - 1 and len(inner_array) > 0:
                outer_array.append(inner_array)
        else:
            if len(inner_array) > 0:
                outer_array.append(inner_array)
            inner_array = list()

        max_length = 0

    for arr in outer_array:
        if len(arr) > max_length:
            max_length = len(arr)

    return max_length


print(get_max_stability_time([0, 1, 1, 1, 0, 0, 1, 1]))
print(get_max_stability_time([1, 1, 1, 1, 0, 0, 1, 1]))
