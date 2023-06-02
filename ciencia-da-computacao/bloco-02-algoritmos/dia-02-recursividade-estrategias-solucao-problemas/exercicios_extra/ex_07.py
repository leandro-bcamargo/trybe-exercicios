def find_duplicate(nums):
    for num in nums:
        if nums.count(num) > 1:
            return num
