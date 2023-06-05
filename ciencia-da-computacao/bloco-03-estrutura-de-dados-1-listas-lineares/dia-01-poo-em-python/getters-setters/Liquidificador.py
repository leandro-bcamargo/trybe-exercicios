class Liquidificador:
    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe liquidificador turquesa")

        self.__cor = nova_cor

    def __init__(self, cor, potencia, tensao, preco) -> None:
        self.cor = cor


meu_liquidificador = Liquidificador("azul", 110, 127, 200)
print(meu_liquidificador.cor)
meu_liquidificador.cor = "rosa"
print(meu_liquidificador.cor)
