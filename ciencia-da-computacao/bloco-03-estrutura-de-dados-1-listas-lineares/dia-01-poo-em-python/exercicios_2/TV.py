class TV:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1
        else:
            raise ValueError("O volume máximo é 99")

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1
        else:
            raise ValueError("O volume mínimo é 0")

    def modificar_canal(self, new_canal):
        if 1 <= new_canal <= 99:
            self.__canal = new_canal
        else:
            raise ValueError("O canal deve estar entre 1 e 99")

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
