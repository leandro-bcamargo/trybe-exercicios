from collections import Counter
import random

lista_de_numeros = []

for x in range(10000):
    lista_de_numeros.append(random.randint(0, 1000))

# print(lista_de_numeros)
counter = Counter(lista_de_numeros)
print(counter)
most_common = Counter.most_common(counter)
# number, frequency = most_common[0]
print(counter.most_common(1)[0])
print(number := counter.most_common(1)[0])
