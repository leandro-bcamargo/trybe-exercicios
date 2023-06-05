from Eletrodomestico import Eletrodomestico


class Batedeira(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco) -> None:
        super().__init__(cor, potencia, tensao, preco)

    def __str__(self) -> str:
        return f"""
        cor -> {self.cor}
        potencia -> {self._potencia}
        tensao -> {self._tensao}
        preco -> {self.preco}
    """


minha_batedeira = Batedeira("Preto", 700, 127, 250)
print(minha_batedeira)
