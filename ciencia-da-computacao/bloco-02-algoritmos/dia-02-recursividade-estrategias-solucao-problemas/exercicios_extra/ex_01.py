# The Fibonacci sequence is a series of numbers where a number is the sum of
# the two numbers before it. The first two numbers of the Fibonacci
# sequence are 0 and 1. For example, the first 10 numbers of the
# Fibonacci sequence are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

# Write a recursive function in Python to generate
# the nth number in the Fibonacci sequence.
# The function should take a single argument n
# and return the nth number in the sequence.


def generate_fibonacci(n):
    if n == 0:
        return 0
    if n == 1:
        return 1

    return generate_fibonacci(n - 2) + generate_fibonacci(n - 1)


print(generate_fibonacci(10))
