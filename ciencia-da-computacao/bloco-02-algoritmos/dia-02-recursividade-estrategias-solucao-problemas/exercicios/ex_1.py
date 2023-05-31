from typing import List


def count_even_numbers(numbers: List[int]) -> int:
    counter: int = 0
    for number in numbers:
        if number % 2 == 0:
            counter += number

    return counter


if __name__ == "__main__":
    print(count_even_numbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
