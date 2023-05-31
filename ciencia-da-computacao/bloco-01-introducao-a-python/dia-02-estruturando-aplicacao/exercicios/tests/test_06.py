from ex_6 import validate_email


def test_validate_email_format():
    "Deve seguir o formato nomeusuario@nomewebsite.extensao"
    assert not validate_email("userdomain.com")
    assert not validate_email("@domain.com")
    assert not validate_email("user@domain")
    assert validate_email("teste@teste.com")


def test_validate_email_username():
    """
    Nome de usuário deve conter somente letras,
    digitos, traços e underscore
    """
    assert not validate_email("user1-_23*@domain.com")
    assert validate_email("user1-_23@domain.com")


def test_validate_email_start_letter():
    "Nome de usuário deve começar por uma letra"
    assert not validate_email("1user@domain.com")
    assert validate_email("user@domain.com")


def test_validate_email_domain():
    "Website deve conter somente letras e dígitos"
    assert not validate_email("user@*domain.com")
    assert validate_email("user@domain.com")


def test_validate_email_extension():
    "Extensão deve conter no máximo 3 caracteres"
    assert not validate_email("user@domain.comz")
    assert validate_email("user@domain.com")
