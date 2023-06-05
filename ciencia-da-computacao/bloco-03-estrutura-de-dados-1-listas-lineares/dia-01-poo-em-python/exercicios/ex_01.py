class TV:
    def __init__(self, tamanho) -> None:
        self.volume = 50
        self.canal = 1
        self.tamanho = tamanho
        self.ligada = False

    @property
    def volume(self):
        return self.__volume

    @property
    def canal(self):
        return self.__canal

    @property
    def tamanho(self):
        return self.__tamanho

    @property
    def ligada(self):
        return self.__ligada

    @volume.setter
    def volume(self, new_volume):
        self.__volume = new_volume

    @canal.setter
    def canal(self, new_canal):
        self.__canal = new_canal

    @tamanho.setter
    def tamanho(self, new_tamanho):
        self.__tamanho = new_tamanho

    @ligada.setter
    def ligada(self, new_ligada):
        self.__ligada = new_ligada

    def aumentar_volume(self):
        if self.volume < 99:
            self.volume += 1
        else:
            raise ValueError("O volume máximo é 99")

    def diminuir_volume(self):
        if self.volume >= 0:
            self.volume -= 1
        else:
            raise ValueError("O volume mínimo é 0")

    def modificar_canal(self, new_canal):
        if 1 <= new_canal <= 99:
            self.canal = new_canal
        else:
            raise ValueError("O canal deve estar entre 1 e 99")

    def ligar_desligar(self):
        self.ligada = not self.ligada
