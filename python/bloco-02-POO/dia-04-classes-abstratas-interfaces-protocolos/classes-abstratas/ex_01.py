from abc import ABC, abstractmethod


class Pessoa(ABC):
    def __init__(self, cargo) -> None:
        super().__init__()
        self.__cargo = cargo

    @abstractmethod
    def imprimir_cargo(self):
        pass

    @property
    def cargo(self):
        return self.__cargo


class Vendedor(Pessoa):
    def __init__(self, cargo) -> None:
        super().__init__(cargo)

    def imprimir_cargo(self):
        print("Meu cargo é de " + self.cargo)


class Gerente(Pessoa):
    def __init__(self, cargo) -> None:
        super().__init__(cargo)

    def imprimir_cargo(self):
        print("Meu cargo é de " + self.cargo)


vendedor = Vendedor("vendedor")
gerente = Gerente("gerente")
vendedor.imprimir_cargo()
gerente.imprimir_cargo()
