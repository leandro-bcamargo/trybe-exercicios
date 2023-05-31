def sum_smaller_numbers(n):
    if n == 1:
        return 1
    return n + sum_smaller_numbers(n - 1)


print(sum_smaller_numbers(5))
