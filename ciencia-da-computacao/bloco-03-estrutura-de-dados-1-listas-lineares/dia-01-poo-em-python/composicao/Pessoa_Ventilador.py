from Ventilador import Ventilador


class Pessoa:
    def __init__(self, nome, saldo_da_conta) -> None:
        self.nome = nome
        self.saldo_da_conta = saldo_da_conta
        self.ventilador = None

    @property
    def nome(self):
        return self._nome

    @property
    def saldo_da_conta(self):
        return self._saldo_da_conta

    @nome.setter
    def nome(self, new_name):
        self._nome = new_name

    @saldo_da_conta.setter
    def saldo_da_conta(self, new_saldo_da_conta):
        self._saldo_da_conta = new_saldo_da_conta

    def comprar_ventilador(self, new_ventilador):
        if new_ventilador.preco <= self.saldo_da_conta:
            self.ventilador = new_ventilador
            self.saldo_da_conta -= new_ventilador.preco

    def possui_ventilador(self):
        return True if self.ventilador else False

    def __str__(self) -> str:
        return f"""
    nome -> {self.nome}
    saldo_da_conta -> {self.saldo_da_conta}
    ventilador -> {self.possui_ventilador()}
    """


if __name__ == "__main__":
    leandro = Pessoa("leandro", 1000)
    meu_ventilador = Ventilador("Azul", 500, 127, 150)
    leandro.comprar_ventilador(meu_ventilador)
    print(leandro)
