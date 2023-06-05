class Ventilador:
    def __init__(
        self,
        cor,
        potencia,
        tensao,
        preco,
    ) -> None:
        self.cor = cor
        self.potencia = potencia
        self.tensao = tensao
        self.preco = preco

    @property
    def cor(self):
        return self._cor

    @property
    def potencia(self):
        return self._potencia

    @property
    def tensao(self):
        return self._tensao

    @property
    def preco(self):
        return self._preco

    @cor.setter
    def cor(self, new_cor):
        self._cor = new_cor

    @potencia.setter
    def potencia(self, new_potencia):
        self._potencia = new_potencia

    @tensao.setter
    def tensao(self, new_tensao):
        self._tensao = new_tensao

    @preco.setter
    def preco(self, new_preco):
        self._preco = new_preco

    def __str__(self) -> str:
        return f"""
    cor -> {self.cor}
    potencia -> {self.potencia}
    tensao -> {self.tensao}
    preco -> {self.preco}
    """


if __name__ == "__main__":
    meu_ventilador = Ventilador("vermelho", 500, 110, 200)
    print(meu_ventilador)
