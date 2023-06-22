def has_duplicate(numbers):
    seen_before = set()

    for number in numbers:
        if number in seen_before:
            return True
        seen_before.add(number)

    return False


if __name__ == "__main__":
    numbers = [5, 4, 2, 6, 3, 1]
    print(has_duplicate(numbers))
