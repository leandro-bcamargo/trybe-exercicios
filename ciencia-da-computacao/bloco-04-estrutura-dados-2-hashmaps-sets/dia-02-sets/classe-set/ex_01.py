from Conjunto import Conjunto

estudantes = [1, 2, 3, 4, 5, 6, 7]
lista1_entregues = [1, 4, 7, 3]
lista2_entregues = [3, 1, 6]

conjunto_estudantes = Conjunto()
for estudante in estudantes:
    conjunto_estudantes.add(estudante)

conjunto_lista1 = Conjunto()
for estudante in lista1_entregues:
    conjunto_lista1.add(estudante)

conjunto_lista2 = Conjunto()
for estudante in lista2_entregues:
    conjunto_lista2.add(estudante)

lista1_not_handed = conjunto_estudantes.difference(conjunto_lista1)
both_lists_handed = conjunto_lista1.intersection(conjunto_lista2)
any_list_handed = conjunto_lista1.union(conjunto_lista2)
no_list_handed = conjunto_estudantes.difference(
    conjunto_lista1.union(conjunto_lista2)
)
print(lista1_not_handed)
print(both_lists_handed)
print(any_list_handed)
print(no_list_handed)
