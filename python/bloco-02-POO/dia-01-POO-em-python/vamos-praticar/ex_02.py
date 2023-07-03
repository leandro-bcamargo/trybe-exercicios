def filter_strings(strings: list[str], letter: str) -> list[str]:
    return [string for string in strings if string[0] == letter]
