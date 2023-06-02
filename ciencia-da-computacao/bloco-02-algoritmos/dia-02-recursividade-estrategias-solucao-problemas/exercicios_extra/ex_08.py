def is_palindrom_iterative(word):
    for index in range(len(word)):
        if word[index] != word[-1 - index]:
            return False

    return True


print(is_palindrom_iterative("araras"))
