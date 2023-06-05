import Liquidificador


class Pessoa:
    def __init__(self, nome, saldo_da_conta) -> None:
        self.nome = nome
        self.saldo_da_conta = saldo_da_conta
        self.liquidificador = None

    def __str__(self) -> str:
        return f"{self.nome} possui {self.saldo_da_conta} reais em conta."

    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_da_conta:
            self.saldo_da_conta -= liquidificador.preco
            self.liquidificador = liquidificador


pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_liquidificador(Liquidificador.meu_liquidificador)
print(pessoa_cozinheira)
