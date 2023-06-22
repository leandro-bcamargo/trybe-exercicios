class Conjunto:
    def __init__(self) -> None:
        self.__data = [False for _ in range(1001)]
        self.__last_el = None

    @property
    def data(self):
        return self.__data

    def add(self, item):
        if item <= 1000:
            self.__data[item] = True
            self.__last_el = item

    def __str__(self) -> str:
        string = "{"
        for index, value in enumerate(self.__data):
            if value:
                string += f'{index}\
{", " if not index == self.__last_el else ""}'

        string += "}"

        return string

    def __contains__(self, item):
        return self.__data[item]

    def union(self, conjunto):
        new_conjunto = Conjunto()
        for num in range(len(self.__data)):
            if self.__data[num] or conjunto.data[num]:
                new_conjunto.add(num)

        return new_conjunto

    def intersection(self, conjunto):
        new_conjunto = Conjunto()
        for num in range(len(self.__data)):
            if self.__data[num] and conjunto.data[num]:
                new_conjunto.add(num)

        return new_conjunto

    def difference(self, conjunto):
        new_conjunto = Conjunto()
        for num in range(len(self.__data)):
            if self.data[num] and not conjunto.data[num]:
                new_conjunto.add(num)

        return new_conjunto

    def issubset(self, conjunto):
        for num in range(len(self.data)):
            if self.data[num] and not conjunto.data[num]:
                return False

        return True

    def issuperset(self, conjunto):
        for num in range(len(self.data)):
            if conjunto.data[num] and not self.data[num]:
                return False

        return True


if __name__ == "__main__":
    conjunto1 = Conjunto()
    conjunto2 = Conjunto()

    for num in range(1, 11):
        conjunto1.add(num)

    # for num in range(10, 21):
    #     conjunto2.add(num)

    for num in range(1, 6):
        conjunto2.add(num)

    print(conjunto1.union(conjunto2))
    print(conjunto1.intersection(conjunto2))
    print(conjunto1.difference(conjunto2))
    print(conjunto2.issubset(conjunto1))
    print(conjunto1.issuperset(conjunto2))
