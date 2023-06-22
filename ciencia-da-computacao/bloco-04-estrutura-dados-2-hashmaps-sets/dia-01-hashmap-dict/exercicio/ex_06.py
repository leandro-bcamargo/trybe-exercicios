def find_combinations(rolls, target):
    dict_rolls = {}
    for roll in rolls:
        if roll not in dict_rolls:
            dict_rolls[roll] = 0
        dict_rolls[roll] += 1

    combinations = []

    copy_dict_rolls = dict_rolls.copy()

    for roll in copy_dict_rolls:
        difference = target - roll
        if (
            difference not in copy_dict_rolls
            or copy_dict_rolls[roll] == 0
            or copy_dict_rolls[difference] == 0
        ):
            continue
        combinations.append((roll, difference))
        copy_dict_rolls[difference] -= 1
        copy_dict_rolls[roll] -= 1

    return combinations


rolls = [1, 5, 3, 2, 6, 1, 4, 2, 6, 3, 1, 1, 4, 4]
print(find_combinations(rolls, 8))

# def find_combinations(rolls, target):
#     dict_rolls = {}
#     for roll in rolls:
#         if roll not in dict_rolls:
#             dict_rolls[roll] = 0
#         dict_rolls[roll] += 1

#     combinations = []

#     copy_dict_rolls = dict_rolls.copy()

#     for roll in copy_dict_rolls:
#         difference = target - roll
#         if difference == roll:
#             if copy_dict_rolls[roll] > 1:
#                 combinations.append((roll, difference))
#                 copy_dict_rolls[roll] -= 2
# elif difference in copy_dict_rolls and copy_dict_rolls[difference] > 0:
#             combinations.append((roll, difference))
#             copy_dict_rolls[difference] -= 1
#             copy_dict_rolls[roll] -= 1

#     return combinations
