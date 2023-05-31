def create_list(n):
    number_list = list(range(1, n + 1))
    for number in number_list:
        if number % 3 == 0 and number % 5 == 0:
            number_list[number_list.index(number)] = "FizzBuzz"
        elif number % 3 == 0:
            number_list[number_list.index(number)] = "Fizz"
        elif number % 5 == 0:
            number_list[number_list.index(number)] = "Buzz"

    return number_list


print(create_list(10))
