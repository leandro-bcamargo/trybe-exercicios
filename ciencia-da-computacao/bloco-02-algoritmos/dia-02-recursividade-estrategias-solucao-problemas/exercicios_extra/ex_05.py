def is_palindrome_recursive(word, low_index, high_index):
    if low_index == high_index:
        return True

    first_char = word[low_index]
    last_char = word[high_index]
    if first_char == last_char:
        return is_palindrome_recursive(word, low_index + 1, high_index - 1)
    return False


print(is_palindrome_recursive("ab", 0, 1))
