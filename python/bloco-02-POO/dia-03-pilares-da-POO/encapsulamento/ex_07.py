class GastoMensal:
    def __init__(self, internet, supermercado, luz, agua, aluguel) -> None:
        self.internet = internet
        self.supermercado = supermercado
        self._luz = luz
        self._agua = agua
        self.__aluguel = aluguel

    @property
    def luz(self):
        return self._luz

    @luz.setter
    def luz(self, new_luz):
        self._luz = new_luz

    @property
    def agua(self):
        return self._agua

    @agua.setter
    def agua(self, new_agua):
        self._agua = new_agua

    @property
    def aluguel(self):
        return self.__aluguel

    @aluguel.setter
    def aluguel(self, new_aluguel):
        self.__aluguel = new_aluguel
