from ex_05 import dictionary

dictionary = {
    key: key * 3 if key % 2 != 0 else key * 2 for key in dictionary.keys()
}
print(dictionary)
