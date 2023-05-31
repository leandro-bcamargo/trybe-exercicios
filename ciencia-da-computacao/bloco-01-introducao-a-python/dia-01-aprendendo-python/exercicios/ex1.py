def return_biggest_number(*numbers):
    print(type(numbers))
    print(numbers)
    return max(numbers)


print(return_biggest_number(10, 20, 30, 50, 6345, 12341, 345, 23421))
