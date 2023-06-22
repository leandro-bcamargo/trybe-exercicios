def get_seven(numbers):
    seen_before = set()
    pairs = list()

    for number in numbers:
        complement = 7 - number
        if complement in seen_before:
            pairs.append((number, complement))
            seen_before.remove(complement)
        else:
            seen_before.add(number)

    return pairs


if __name__ == "__main__":
    numbers = [5, 2, 1, 3, 2, 6, 1, 4, 2, 6, 3, 1]
    print(get_seven(numbers))
