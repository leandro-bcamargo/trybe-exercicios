class Produto:
    def __init__(self, preco) -> None:
        self.preco = preco

    def imprimir_preco(self):
        raise NotImplementedError("Esta classe deve ser implementada")


class Livro(Produto):
    def __init__(self, preco) -> None:
        super().__init__(preco)

    def imprimir_preco(self):
        return f"O preço do livro é de {self.preco} reais"


livro = Livro(30)
print(livro.imprimir_preco())
