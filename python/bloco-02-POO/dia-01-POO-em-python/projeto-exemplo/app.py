from typing import Any, Optional


class Questão:
    def __init__(self, enunciado: str, resposta_correta: Any) -> None:
        self.enunciado = enunciado
        self.resposta_correta = resposta_correta

    def resolver(self, resposta: Any) -> bool:
        return bool(self.resposta_correta == resposta)

    def __str__(self) -> str:
        # ? Para entender este método, olhe o tópico opcional na lição Herança
        return self.enunciado


class QuestãoDeMúltiplaEscolha(Questão):
    def __init__(self, enunciado: str, resposta_correta: int) -> None:
        super().__init__(enunciado, resposta_correta)
        self.alternativas: list[str] = []

    def adicionar_alternativa(self, alternativa: str) -> None:
        self.alternativas.append(alternativa)

    def resolver(self, resposta: int) -> bool:
        # Tipagem nominal dinâmica por meio da chamada à função `int`
        return super().resolver(int(resposta))

    def __str__(self) -> str:
        # Retorna o enunciado e todas as alternativas numeradas, separadas
        # por quebras de linha (\n)
        return (
            super().__str__()  # Retorna o enunciado
            + "\n"  # Quebra de linha entre o enunciado e alternativas
            + "\n".join(  # Junta as alternativas com quebras de linha
                f"{num} - {texto}"  # Junta o número da alternativa com o texto
                # Enumera as alternativas, contando a partir do 0
                for num, texto in enumerate(self.alternativas)
            )
        )


class QuestãoAberta(Questão):
    def __init__(self, enunciado: str, resposta_correta: str) -> None:
        super().__init__(enunciado, resposta_correta)

    def resolver(self, resposta: str) -> bool:
        return super().resolver(resposta)


class Questionário:
    def __init__(self, questões: Optional[list[Questão]] = None) -> None:
        # Cria uma lista vazia se não for passada uma lista
        self.questões = questões or []

    def adicionar_questão(self, questão: Questão) -> None:
        self.questões.append(questão)

    def resolver(self) -> float:
        acertos = 0
        for questão in self.questões:
            print(questão)
            resposta = input("Resposta: ")
            if questão.resolver(resposta):
                acertos += 1

        return acertos / len(self.questões)


def criar_questão() -> Questão:
    input_str = "Digite A para uma questão aberta e M para múltipla escolha: "
    while (tipo := input(input_str).lower()) not in ["a", "m"]:
        print("Tipo de questão inválido!")

    enunciado = input("Digite o enunciado: ")

    # ? Questão aberta
    if tipo == "a":
        resposta_correta = input("Digite a resposta: ")
        return QuestãoAberta(enunciado, resposta_correta)

    # ? Questão de múltipla escolha
    alternativas: list[str] = []
    input_str = "Digite a alternativa ou P para parar: "
    while (alternativa := input(input_str)).lower() != "p":
        alternativas.append(alternativa)

    input_str = "Digite o número da alternativa correta: "
    # Enquanto a pessoa digitar uma alternativa menor que 0 ou maior que a
    # última, continua perguntando
    while (certa := int(input(input_str))) < 0 or certa >= len(alternativas):
        print("Número de alternativa inválido!")

    questão = QuestãoDeMúltiplaEscolha(enunciado, resposta_correta=certa)

    for alternativa in alternativas:
        questão.adicionar_alternativa(alternativa)

    return questão


def main() -> None:
    questionário = Questionário()

    while True:
        escolha = input(
            "Digite A para adicionar uma questão, "
            "R para resolver o questionário "
            "ou S para sair: "
        ).lower()

        if escolha == "a":
            questionário.adicionar_questão(criar_questão())
        elif escolha == "r":
            resultado = questionário.resolver() * 100
            print(f"Sua nota foi {resultado:.2f}%")
        elif escolha == "s":
            print("Até mais!")
            break
        else:
            print("Escolha inválida!")


if __name__ == "__main__":
    while True:
        try:
            print("Vamos começar!")
            main()
        except Exception:
            pass
        else:
            break
