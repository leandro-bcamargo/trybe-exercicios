from ex_6_2 import validate_email
import pytest


def test_username_should_only_contain_letters():
    assert validate_email("username@website.ext")


def test_username_should_contain_letters_and_digits():
    assert validate_email("username123@website.ext")


def test_username_should_contain_letters_digits_and_dashes():
    assert validate_email("username-123@website.ext")


def test_username_should_contain_letters_digits_dashes_and_undescore():
    assert validate_email("username-123_@website.ext")


def test_username_should_start_with_letter():
    with pytest.raises(ValueError):
        validate_email("1username@website.ext")


def test_username_should_be_valid():
    with pytest.raises(ValueError):
        validate_email("username*@website.ext")


def test_website_should_contain_only_letters_and_digits():
    assert validate_email("username@website123.ext")


def test_website_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("username@website*.ext")


def test_extension_should_contain_only_3_characters():
    with pytest.raises(ValueError):
        validate_email("username@website.extx")
