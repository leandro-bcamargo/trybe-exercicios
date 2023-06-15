def find_most_common(nums):
    dictionary = dict()
    most_common = nums[0]

    for num in nums:
        if num not in dictionary:
            dictionary[num] = 0
        dictionary[num] += 1

        if dictionary[num] > dictionary[most_common]:
            most_common = num

        return most_common


# for key, value in dictionary.items():
#     if value > max_value:
#         max_value = value
#         most_common = key

print(find_most_common([3, 2, 5, 4, 1, 2, 3, 1, 3, 4, 1]))
