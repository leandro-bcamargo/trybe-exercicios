def validate_email(email):
    index = 0
    if not email[index].isalpha():
        raise ValueError("The first character should be a letter")

    while index < email.index("@"):
        if not email[index].isalnum() and not email[index] in ["-", "_"]:
            raise ValueError(
                """Username should contain only alphanumeric character,
                dash or underscore."""
            )
        index += 1
    index += 1

    while index < email.index("."):
        if not email[index].isalnum():
            raise ValueError(
                "Website should contain only alphanumeric characters."
            )
        index += 1
    index += 1

    counter = 0
    while index < len(email):
        counter += 1
        index += 1
    if counter > 3:
        raise ValueError("Extension should contain only 3 characters")

    return True
