def check_for_duplicates(numbers_list):
    return not len(set(numbers_list)) == len(numbers_list)


print(check_for_duplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
print(check_for_duplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]))
# def contains_duplicate(numbers):
#     numbers.sort()
#     previous_number = "not a number"
#     for number in numbers:
#         if previous_number == number:
#             return True
#         previous_number = number

#     return False
