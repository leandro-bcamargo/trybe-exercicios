from abc import ABC, abstractmethod


class Produto(ABC):
    def __init__(self, nome: str, preco: float) -> None:
        self.nome = nome
        self.preco = preco

    @abstractmethod
    def descrever(self):
        pass

    @abstractmethod
    def preco(self):
        pass


class Livro(Produto):
    def __init__(self, nome: str, autor: str, preco: float) -> None:
        super().__init__(nome, preco)
        self.autor = autor

    def preco(self):
        return self.preco

    def descrever(self):
        print(
            f"O livro {self.nome}, escrito por {self.autor}, "
            f"custa {self.preco}"
        )


class DVD(Produto):
    def __init__(
        self,
        nome: str,
        diretor: str,
        preco: float,
    ) -> None:
        super().__init__(nome, preco)
        self.diretor = diretor

    def descrever(self):
        print(
            f"O DVD {self.nome}, dirigido por {self.diretor}, "
            f"custa {self.preco}"
        )

    def preco(self):
        return self.preco


def imprimir_detalhes(produto: Produto):
    return produto.descrever()


Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 29.99)
DVD("O Poderoso Chefão", "Francis Ford Coppola", 19.99)
livro = Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 29.99)
dvd = DVD("O Poderoso Chefão", "Francis Ford Coppola", 19.99)
imprimir_detalhes(livro)
imprimir_detalhes(dvd)
