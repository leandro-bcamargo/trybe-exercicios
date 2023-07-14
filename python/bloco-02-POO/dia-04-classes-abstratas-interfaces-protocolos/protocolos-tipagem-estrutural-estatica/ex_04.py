from typing import Protocol


class CalculaPerimetro(Protocol):
    def calcular_perimetro(self):
        pass


class Triangulo(CalculaPerimetro):
    def __init__(self, lado1: int, lado2: int, lado3: int) -> None:
        self.lado1 = lado1
        self.lado2 = lado2
        self.lado3 = lado3

    def calcular_area(self):
        return f"O perímetro do triângulo é de {self.lado1 + self.lado2 + self.lado3} cm"

    def calcular_perimetro(self):
        return self.lado1 + self.lado2 + self.lado3


triangulo = Triangulo(5, 5, 5)
print(triangulo.calcular_area())
