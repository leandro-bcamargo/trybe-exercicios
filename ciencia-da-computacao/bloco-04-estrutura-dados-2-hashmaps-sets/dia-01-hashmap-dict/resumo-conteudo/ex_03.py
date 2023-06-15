listA = [1, 2, 3, 4, 5, 6]
listB = [4, 5, 6, 7, 8, 9]


def find_common_els(list1, list2):
    seen_in_list1 = dict()
    for el in list1:
        if el not in seen_in_list1:
            seen_in_list1[el] = True

    intersecs = list()

    for el in list2:
        if el in seen_in_list1:
            intersecs.append(el)

    return intersecs


print(find_common_els(listA, listB))
