def validate_email(email):
    if "@" not in email or "." not in email:
        return False
    user, domain_extension = email.split("@")
    if not user or not domain_extension:
        return False
    user_domain, extension = email.split(".")
    if not user_domain or not extension:
        return False
    user, domain, extension = ".".join(email.split("@")).split(".")
    for char in user:
        if not char.isalnum() and not char == "-" and not char == "_":
            return False
    for char in domain:
        if not char.isalnum() and not char == "-" and not char == "_":
            return False
    for char in extension:
        if not char.isalnum() and not char == "-" and not char == "_":
            return False
    if not email[0].isalpha():
        return False
    if not domain.isalnum():
        return False
    if not len(extension) <= 3:
        return False
    return True
