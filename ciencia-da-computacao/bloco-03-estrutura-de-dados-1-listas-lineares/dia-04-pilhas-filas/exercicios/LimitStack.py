from ex_02 import Stack


class StackOverflow(Exception):
    def __init__(self, message) -> None:
        super().__init__(message)


class LimitStack(Stack):
    def __init__(self, size_limit) -> None:
        super().__init__()
        self.__size_limit = size_limit

    def push(self, value):
        if len(self._data) < self.__size_limit:
            super().push(value)
        else:
            raise StackOverflow("Não é possível adicionar outro item à pilha")


stack = LimitStack(2)
stack.push(1)
stack.push(-2)
try:
    stack.push(5)
except StackOverflow as error:
    print(error)
