import random

random_list = random.sample(range(100000), 1000)
print(random_list)
print(max(random_list))
print(min(random_list))
print(len(random_list))

random_list2 = random.sample(range(100000), random.randint(1, 100))
print(len(random_list2))
