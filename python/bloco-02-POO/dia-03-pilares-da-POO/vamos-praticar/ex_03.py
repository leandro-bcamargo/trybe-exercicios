from abc import ABC, abstractmethod
import math


class FiguraGeometrica(ABC):
    def __init__(self) -> None:
        super().__init__()

    @abstractmethod
    def area():
        pass

    def perimetro():
        pass


class Quadrado(FiguraGeometrica):
    def __init__(self, lado: int) -> None:
        super().__init__()
        self.lado = lado

    def area(self):
        return self.lado**2

    def perimetro(self):
        return self.lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base: int, altura: int) -> None:
        super().__init__()
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return self.base * 2 + self.altura * 2


class Circle(FiguraGeometrica):
    def __init__(self, raio: int) -> None:
        super().__init__()
        self.raio = raio

    def area(self):
        return math.pi * (self.raio**2)

    def perimetro(self):
        return 2 * math.pi * self.raio


quadrado = Quadrado(10)
retangulo = Retangulo(8, 4)
circulo = Circle(4)

print(quadrado.area())
print(quadrado.perimetro())
print(retangulo.area())
print(retangulo.perimetro())
print(circulo.area())
print(circulo.perimetro())
