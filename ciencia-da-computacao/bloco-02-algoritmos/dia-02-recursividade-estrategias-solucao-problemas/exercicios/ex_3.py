from typing import List


def find_biggest_number(list_numbers: List[int]):
    if len(list_numbers) == 1:
        return list_numbers[0]

    biggest_number_rest = find_biggest_number(list_numbers[1:])

    if list_numbers[0] > biggest_number_rest:
        return list_numbers[0]
    return biggest_number_rest


if __name__ == "__main__":
    print(find_biggest_number([1, 3, 5, 7, 9, 2, 4, 6, 8]))
