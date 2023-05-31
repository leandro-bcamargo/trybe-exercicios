def count_even_up_to(n: int) -> int:
    if n == 0:
        return 0

    if n % 2 == 0:
        return n + count_even_up_to(n - 1)
    return count_even_up_to(n - 1)


if __name__ == "__main__":
    print(count_even_up_to(10))
