def largest_name(list_of_names):
    result = ""
    name_length = 0
    for name in list_of_names:
        if len(name) > name_length:
            name_length = len(name)
            result = name

    return result


def largest_name_2(list_of_names):
    return max(list_of_names, key=len)


list_names = ["leandro", "lucas", "carmen", "edson"]

print(largest_name(list_names))
print(largest_name_2(list_names))
