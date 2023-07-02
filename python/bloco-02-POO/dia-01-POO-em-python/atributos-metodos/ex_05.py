class Carro:
    marca: str
    modelo: str
    ano: int
    cor: str

    def identificar(self):
        print(
            "Meu carro é um {} {}. "
            "Ele é do ano {} e tem a cor {}".format(
                self.marca, self.modelo, self.ano, self.cor
            )
        )


meu_carro = Carro()

meu_carro.ano = 2000

meu_carro.modelo = "Palio"

meu_carro.marca = "Fiat"

meu_carro.cor = "Azul"

meu_carro.identificar()
