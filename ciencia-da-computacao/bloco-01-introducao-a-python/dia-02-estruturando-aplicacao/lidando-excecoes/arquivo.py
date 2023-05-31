while True:
    try:
        x = int(input("Por favor, digite um número inteiro: "))
        break
    except ValueError:
        print("Oops! Esse não é um número inteiro. Tente novamente.")
