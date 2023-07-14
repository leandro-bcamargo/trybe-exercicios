from abc import ABC, abstractmethod


class Cliente:
    def __init__(self, nome: str, telefone: str) -> None:
        self.nome = nome
        self.telefone = telefone


class Endereco:
    def __init__(
        self, rua: str, numero: str, bairro: str, cidade: str, estado: str
    ) -> None:
        self.rua = rua
        self.numero = numero
        self.bairro = bairro
        self.cidade = cidade
        self.estado = estado


class Entregavel(ABC):
    @abstractmethod
    def entregar(self, cliente: Cliente, endereco: Endereco) -> None:
        pass


class Correios(Entregavel):
    def __init__(self) -> None:
        super().__init__()

    def entregar(self, cliente, endereco) -> None:
        print(
            f"O cliente {cliente.nome}, telefone {cliente.telefone}, "
            f"terá seu pacote entregue no "
            f"endereço {endereco.rua}, numero {endereco.numero}, "
            f"bairro {endereco.bairro}, cidade "
            f"{endereco.cidade}, em {endereco.estado}."
        )


class Transportadora(Entregavel):
    def __init__(self) -> None:
        super().__init__()

    def entregar(self, cliente, endereco) -> None:
        print(
            f"O cliente {cliente.nome}, telefone {cliente.telefone}, "
            f"terá seu pacote entregue no "
            f"endereço {endereco.rua}, numero {endereco.numero}, "
            f"bairro {endereco.bairro}, cidade "
            f"{endereco.cidade}, em {endereco.estado}."
        )


class Main:
    def main(self) -> None:
        correios = Correios()
        transportadora = Transportadora()
        cliente = Cliente("Leandro", "9999-9999")
        endereco = Endereco(
            "Alameda dos anjos", "666", "Pompéia", "São Paulo", "SP"
        )

        correios.entregar(cliente, endereco)
        transportadora.entregar(cliente, endereco)


if __name__ == "__main__":
    main = Main()
    main.main()
