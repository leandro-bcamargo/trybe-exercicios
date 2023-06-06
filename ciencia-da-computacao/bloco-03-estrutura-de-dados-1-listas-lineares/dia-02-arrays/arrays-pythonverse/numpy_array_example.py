import numpy as np

my_array = np.array([], dtype=int)

my_array = np.insert(my_array, 0, 5)
my_array = np.insert(my_array, 1, 3)
my_array = np.insert(my_array, 2, 5)

print(f"Apos adicionar alguns valores: {my_array}")

my_array = np.insert(my_array, 1, 4)

print(f"Apos adicionar numa posicao intermediaria: {my_array}")

my_array = np.delete(my_array, 0)

print(f"Apos remover um valor: {my_array}")
