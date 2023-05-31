try:
    with open("arquivo2.txt", "r") as file:
        print(file.read())
except FileNotFoundError:
    print("Arquivo inexistente")
else:
    print("Arquivo manipulado com sucesso")
finally:
    print("Fim da tentativa de ler arquivo")
