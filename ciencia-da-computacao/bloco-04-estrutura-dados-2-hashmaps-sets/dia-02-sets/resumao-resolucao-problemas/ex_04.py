def to_buy(shelf):
    unique_items = set(shelf)
    all_items = set(range(1, 21))

    return all_items.difference(unique_items)


if __name__ == "__main__":
    numbers = [5, 4, 2, 6, 3, 1, 9, 14, 12, 10]
    print(to_buy(numbers))
