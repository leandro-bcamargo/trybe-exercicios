def find_smallest_element_index(list, start, end):
    # incializamos o smallest_element como sendo o primeiro elemento da lista
    # e seu index como sendo o índice inicial
    smallest_element = list[start]
    smallest_element_index = start
    # varremos os elementos após o índice sob consideração
    for index in range(start + 1, end):
        # comparamos esses elementos ao menor elemento até então
        if list[index] < smallest_element:
            smallest_element = list[index]
            smallest_element_index = index

    return smallest_element_index


def selection_sort(list):
    list_length = len(list)
    # range vai de 0 até o penúltimo índice,
    # pois não precisamos mexer no último.
    for index in range(list_length - 1):
        # vamos passar cada elemento da lista, a partir do índice que estamos
        # considerando, exceto o último,
        # para a função find_smallest_element_index
        smallest_element_index = find_smallest_element_index(
            list, index, list_length
        )
        # terminada a função, estamos de posse de smallest_element_index
        # trocamos o elemento em smallest_element_index e
        # o elemento de índice index
        list[smallest_element_index], list[index] = (
            list[index],
            list[smallest_element_index],
        )

    return list


print(selection_sort([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]))
