import random


def generate_array_random_numbers(n):
    list_out = list()
    for index_out in range(100):
        list_in = list()
        for index_in in range(n):
            random_number = random.randint(0, 100)
            list_in.append(random_number)

        print("list_in:", list_in)
        sum_random_nums = sum(list_in)
        qty_random_nums = len(list_in)
        average = sum_random_nums / qty_random_nums
        list_out.append(average)

    print("list_out:", list_out)


generate_array_random_numbers(5)
