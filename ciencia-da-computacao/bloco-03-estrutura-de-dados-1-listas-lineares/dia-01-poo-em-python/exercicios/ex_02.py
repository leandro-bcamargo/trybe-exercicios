import math


class Estatistica:
    def __init__(self, numbers) -> None:
        self.numbers = numbers

    @property
    def numbers(self):
        return self.__numbers

    @numbers.setter
    def numbers(self, new_numbers):
        self.__numbers = new_numbers

    def __str__(self) -> str:
        return f"""
    media -> {self.media()}
    mediana -> {self.mediana()}
    moda -> {self.moda()}
    """

    def media(self):
        return self.numbers / len(self.numbers)

    def mediana(self):
        ordered_numbers = sorted(self.numbers)
        numbers_length = len(self.numbers)
        if numbers_length % 2 == 0:
            first_el = math.floor(numbers_length / 2)
            second_el = math.ceil(numbers_length / 2)
            return (ordered_numbers[first_el] + ordered_numbers[second_el]) / 2
        central_el = numbers_length / 2
        return ordered_numbers[central_el]

    def moda(self):
        numbers_dict = dict()
        for number in self.numbers:
            if numbers_dict.get(number):
                numbers_dict[number] += 1
            else:
                numbers_dict[number] = 1

        biggest_frequency = 0
        number_biggest_frequency = 0

        for number, frequency in numbers_dict.items():
            if frequency > biggest_frequency:
                biggest_frequency = frequency
                number_biggest_frequency = number

        return number_biggest_frequency


minha_estatistica = Estatistica([1, 2, 3, 4, 5, 3, 3])
print(minha_estatistica.moda())
