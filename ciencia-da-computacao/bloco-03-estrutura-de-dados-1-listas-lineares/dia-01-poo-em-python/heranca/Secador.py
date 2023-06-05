from Eletrodomestico import Eletrodomestico


class Secador(Eletrodomestico):
    def __init__(
        self,
        cor,
        potencia,
        tensao,
        preco,
    ) -> None:
        super().__init__(cor, potencia, tensao, preco)

    def __str__(self):
        return f"""
            cor -> {self.cor}
            potencia -> {self._potencia}
            tensao -> {self._tensao}
            preco -> {self.preco}
        """


meu_secador = Secador("Azul", 500, 127, 200)
print(meu_secador)
