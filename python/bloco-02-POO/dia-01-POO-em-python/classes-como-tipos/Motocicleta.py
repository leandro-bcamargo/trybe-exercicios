class Motocicleta:
    def __init__(self, velocidade_maxima) -> None:
        self.velocidade_maxima: int = velocidade_maxima


class Caminhao:
    def __init__(self, velocidade_maxima) -> None:
        self.velocidade_maxima: int = velocidade_maxima


def print_valocidade_maxima(object: Motocicleta):
    if not isinstance(object, Motocicleta):
        raise TypeError("O objeto deve ser uma motocicleta.")
    print(object.velocidade_maxima)


motocicleta = Motocicleta(100)
caminhao = Caminhao(100)

print_valocidade_maxima(motocicleta)
print_valocidade_maxima(caminhao)
