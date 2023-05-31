from codigo import is_odd


def test_is_odd_when_number_is_odd_returns_true():
    "Para um número ímpar, deve retornar True"
    assert is_odd(3) is True


def test_is_odd_when_number_is_even_returns_false():
    "Para um número par, deve retornar False"
    assert is_odd(4) is False
