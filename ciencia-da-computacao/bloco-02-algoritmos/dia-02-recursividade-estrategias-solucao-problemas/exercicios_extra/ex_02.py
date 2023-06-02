# Write a recursive function in Python
# to calculate the factorial of a given non-negative integer n.
# The function should take a single argument n
# and return the factorial of n.


def get_factorial(n):
    if n == 1:
        return 1

    return n * get_factorial(n - 1)


print(get_factorial(5))
