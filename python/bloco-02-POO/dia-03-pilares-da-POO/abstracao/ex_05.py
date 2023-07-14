class Retangulo:
    def __init__(self, base: int, altura: int) -> None:
        self.base = base
        self.altura = altura

    def calcular_area(self):
        return self.base * self.altura

    def calcular_perimetro(self):
        return self.base * 2 + self.altura * 2
