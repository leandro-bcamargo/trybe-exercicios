def build_dict(string):
    dictionary = dict()
    for char in string:
        if char not in dictionary:
            dictionary[char] = 0
        dictionary[char] += 1

    return dictionary


print(build_dict("bbbbaaaacccaaaaaaddddddddccccccc"))
print(build_dict("coxinha"))
