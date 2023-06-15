class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name

    def __str__(self) -> str:
        return f"""
id_num -> {self.id_num}
name -> {self.name}
"""


class HashMap:
    def __init__(self) -> None:
        self._buckets = [[] for _ in range(10)]

    def __str__(self) -> str:
        return f""""
buckets -> {self._buckets}
"""

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee: Employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        list_employees = self._buckets[address]
        for employee in list_employees:
            if employee.id_num == id_num:
                return employee.name

    def has(self, id_num):
        address = self.get_address(id_num)
        list_employees = self._buckets[address]
        for employee in list_employees:
            if employee.id_num == id_num:
                return True

        return False

    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        list_employees = self._buckets[address]
        for employee in list_employees:
            if employee.id_num == id_num:
                employee.name = new_name
                return employee


employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
list_employees = [Employee(id_num, name) for id_num, name in employees]
# for employee in list_employees:
#     print(employee)

hash_map = HashMap()
for employee in list_employees:
    hash_map.insert(employee)

print(hash_map.get_value(23))
print(hash_map.update_value(23, "name23"))
