class Animal:
    def __init__(self, nome: str) -> None:
        self.nome = nome

    def fazer_som(self) -> None:
        print(f"{self.nome} fazendo som")


class Mamifero(Animal):
    def __init__(self, nome) -> None:
        super().__init__(nome)

    def amamentar(self) -> None:
        print(f"{self.nome} amamentando")


class MixinCorrer:
    def mostrar_velocidade(self, velocidade: int) -> None:
        print(f"{self.nome} correndo a {velocidade} km/h")


class Cachorro(Mamifero, MixinCorrer):
    def __init__(self, nome) -> None:
        super().__init__(nome)

    def latir(self) -> None:
        print(f"{self.nome} fazendo Au au!")


cachorro = Cachorro("Fido")
cachorro.fazer_som()
cachorro.amamentar()
cachorro.latir()
cachorro.mostrar_velocidade(50)
