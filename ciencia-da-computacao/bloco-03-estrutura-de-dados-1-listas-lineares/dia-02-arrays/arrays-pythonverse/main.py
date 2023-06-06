from array import array
import sys

my_array = array("I")

my_array.insert(0, 5)
my_array.insert(1, 3)
my_array.insert(2, 5)
print(f"Apos adicionar alguns valores: {my_array}")

my_array.insert(1, 4)
print(f"Apos inserção em indice intermediario: {my_array}")

my_array.pop(0)
print(f"Apos remover um valor: {my_array}")

elements = list(range(100))
print(f"Tamanho da lista: {sys.getsizeof(elements)}")

array_from_list = array("I", elements)
print(f"Tamanho do array: {sys.getsizeof(array_from_list)}")
