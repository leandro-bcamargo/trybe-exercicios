import math
from abc import ABC, abstractmethod


class FiguraGeometrica(ABC):
    def __init__(self) -> None:
        pass

    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimetro(self):
        pass

    def __str__(self) -> str:
        return f"""
    area -> {self.area()}
    perimetro -> {self.perimetro()}
    """


class Quadrado(FiguraGeometrica):
    def __init__(self, lado) -> None:
        super().__init__()
        self.lado = lado

    @property
    def lado(self):
        return self.__lado

    @lado.setter
    def lado(self, new_lado):
        self.__lado = new_lado

    def area(self):
        return self.lado**2

    def perimetro(self):
        return 4 * self.lado


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura) -> None:
        super().__init__()
        self.base = base
        self.altura = altura

    @property
    def base(self):
        return self.__base

    @property
    def altura(self):
        return self.__altura

    @base.setter
    def base(self, new_base):
        self.__base = new_base

    @altura.setter
    def altura(self, new_altura):
        self.__altura = new_altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return 2 * (self.base + self.altura)


class Circulo(FiguraGeometrica):
    def __init__(self, raio) -> None:
        super().__init__()
        self.raio = raio

    @property
    def raio(self):
        return self.__raio

    @raio.setter
    def raio(self, new_raio):
        self.__raio = new_raio

    def area(self):
        return math.pi * (self.raio**2)

    def perimetro(self):
        return 2 * math.pi * self.raio


meu_quadrado = Quadrado(5)
meu_retangulo = Retangulo(5, 5)
meu_circulo = Circulo(5)
print(meu_quadrado)
print(meu_retangulo)
print(meu_circulo)
