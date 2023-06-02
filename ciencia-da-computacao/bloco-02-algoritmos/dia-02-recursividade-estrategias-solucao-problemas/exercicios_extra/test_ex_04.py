import pytest


def test_apply_cryptography_raise_exception_key_message_wrong_type():
    "Should raise exception if key or message are of wrong type"
    with pytest.raises(TypeError):
        apply_cryptography(10, 10)
    with pytest.raises(TypeError):
        apply_cryptography("test", "test")


def test_apply_cryptography_key_positive_index_of_message():
    "Should return message inverted if key isn't an index of message"
    assert apply_cryptography("test", 5) == "tset"


def test_apply_cryptography_odd_key():
    "Should reverse each segment and return them linked by underscore"
    assert apply_cryptography("apples", 3) == "ppa_sel"


def test_apply_cryptography_even_key():
    """Should reverse each segment,
    switch them and return them linked by underscore"""
    assert apply_cryptography("apples", 2) == "selp_pa"


def apply_cryptography(string, number):
    if type(string) != str or type(number != int):
        raise TypeError(
            "Should raise exception if key or message are of wrong type"
        )
