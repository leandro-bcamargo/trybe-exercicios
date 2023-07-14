from abc import ABC, abstractmethod


class Funcionario(ABC):
    def __init__(self, nome, salario) -> None:
        super().__init__()
        self.salario = salario
        self.nome = nome

    @abstractmethod
    def calcular_bonificacao(self):
        pass


class Programador(Funcionario):
    def __init__(self, nome, salario) -> None:
        super().__init__(nome, salario)

    def calcular_bonificacao(self):
        return f"O valor do salário do programador {self.nome} somado à bonificação é de {'{:.2f}'.format(self.salario * 1.2)}"


class Analista(Funcionario):
    def __init__(self, nome, salario) -> None:
        super().__init__(nome, salario)

    def calcular_bonificacao(self):
        return f"O valor do salário do analista {self.nome} somado à bonificação é de {'{:.2f}'.format(self.salario * 1.3)}"


class Gerente(Funcionario):
    def __init__(self, nome, salario) -> None:
        super().__init__(nome, salario)

    def calcular_bonificacao(self):
        return f"O valor do salário do gerente {self.nome} somado à bonificação é de {'{:.2f}'.format(self.salario * 1.4)}"


class Colaborador(Funcionario):
    def __init__(self, nome, salario) -> None:
        super().__init__(nome, salario)

    def calcular_bonificacao(self):
        return f"O valor do salário do colaborador {self.nome} somado à bonificação é de {'{:.2f}'.format(self.salario * 1.1)}"


class Main:
    def main(self):
        programador = Programador("Juninho", 1000)
        analista = Analista("Juninho", 1000)
        gerente = Gerente("Juninho", 1000)
        colaborador = Colaborador("Juninho", 1000)

        print(programador.calcular_bonificacao())
        print(analista.calcular_bonificacao())
        print(gerente.calcular_bonificacao())
        print(colaborador.calcular_bonificacao())


main = Main()
main.main()
