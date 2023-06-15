from ex_02 import Stack


def solve_expression(expression):
    stack = Stack()

    list_expressions = expression.split(" ")

    for term in list_expressions:
        if term == "+":
            result = stack.pop() + stack.pop()

            stack.push(result)

        elif term == "-":
            second = stack.pop()
            first = stack.pop()

            stack.push(first - second)

        elif term == "*":
            result = stack.pop() * stack.pop()

            stack.push(result)

        elif term == "/":
            second = stack.pop()
            first = stack.pop()

            stack.push(int(first / second))

        else:
            stack.push(int(term))

    return stack.pop()


# A = 5, B = 10, C = 30

# A + B - C / A -> 5 10 + 30 5 / -
print(solve_expression("5 10 + 30 5 / -"))  # 9

# B + (A * C) / C * 2 -> 10 5 30 * 30 / 2 * +
print(solve_expression("10 5 30 * 30 / 2 * +"))  # 20

# A * B - C + 4 * A - B -> 5 10 * 30 - 4 5 * 10 - +
print(solve_expression("5 10 * 30 - 4 5 * 10 - +"))  # 30

# (A + C / B ) * (A + B) -> 30 10 / 5 + 5 10 + *
print(solve_expression("30 10 / 5 + 5 10 + *"))  # 120

# 50 * B / 2 * 5 / A -> 50 10 * 2 / 5 * 5 /
print(solve_expression("50 10 * 2 / 5 * 5 /"))  # 250
