nomes_1 = ["Felps", "Carlos", "Will", "Bux"]

nomes_2 = ["Flávio", "Carlos", "Roni", ""]

numeros_1 = [1, 2, 3, 4]

numeros_2 = [0, 5, 6, 7]

print(all(nomes_1))
print(all(nomes_2))
print(all(numeros_1))
print(all(numeros_2))

print(any(nomes_1))
print(any(nomes_2))
print(any(numeros_1))
print(any(numeros_2))

print(list(enumerate(nomes_1)))
print(list(enumerate(nomes_2)))
print(list(enumerate(numeros_1)))
print(list(enumerate(numeros_2)))

print([value for index, value in enumerate(nomes_1)])
print([(index, value) for index, value in enumerate(nomes_2)])
