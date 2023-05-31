from ex_5 import create_list


def test_create_list_divisible_by_3():
    "Números divisíveis por 3 devem aparecer como 'Fizz'"
    assert create_list(10)[2] == "Fizz"
    assert create_list(10)[5] == "Fizz"
    assert create_list(10)[8] == "Fizz"


def test_create_list_divisible_by_5():
    "Números divisíveis por 5 devem aparecer como 'Buzz'"
    assert create_list(10)[4] == "Buzz"
    assert create_list(10)[9] == "Buzz"


def test_create_list_divisible_by_3_and_5():
    "Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz'"
    assert create_list(15)[14] == "FizzBuzz"
    assert create_list(30)[29] == "FizzBuzz"
