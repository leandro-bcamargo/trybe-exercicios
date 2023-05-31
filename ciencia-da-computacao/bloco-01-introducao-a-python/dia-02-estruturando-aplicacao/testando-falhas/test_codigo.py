import pytest

from codigo import divide, is_odd


def test_is_odd_when_number_is_odd_returns_true():
    "Para um número ímpar, deve retornar True"
    assert is_odd(3) is True


def test_is_odd_when_number_is_even_returns_false():
    "Para um número par, deve retornar False"
    assert is_odd(4) is False


def test_divide_when_other_number_is_zero_raise_an_exception():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(2, 0)
