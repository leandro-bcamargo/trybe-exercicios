from typing import Protocol


class CalculaPerimetro(Protocol):
    def calcular_perimetro(self):
        pass


class Quadrado:
    def __init__(self, lado: int) -> None:
        self.lado = lado

    def calcular_perimetro(self):
        return self.side * 4
