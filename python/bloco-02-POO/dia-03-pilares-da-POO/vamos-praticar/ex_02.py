from typing import List


class Estatistica:
    def __init__(self, numbers: List[int]) -> None:
        self.numbers = numbers

    def calcula_media(self):
        return sum(self.numbers) / len(self.numbers)

    def calcula_moda(self):
        freq_dict = {}
        for number in self.numbers:
            if not freq_dict.get(number):
                freq_dict[number] = 0
            freq_dict[number] += 1

        return max(freq_dict, key=lambda x: freq_dict.get(x))

    def calcula_mediana(self):
        sorted_numbers = sorted(self.numbers)
        if len(sorted_numbers) % 2 == 0:
            second_num = len(sorted_numbers) // 2
            first_num = second_num - 1
            return (sorted_numbers[first_num] + sorted_numbers[second_num]) / 2
        return sorted_numbers[len(sorted_numbers) // 2]


estatistica = Estatistica([1, 2, 3, 4, 2, 5])
print(estatistica.calcula_media())
print(estatistica.calcula_moda())
print(estatistica.calcula_mediana())
