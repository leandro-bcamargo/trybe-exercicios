from typing import Protocol
from queue import Queue


class MessagingProtocol(Protocol):
    def send_message(self, to: str, msg: str) -> bool:
        pass

    def receive_message(self) -> str | None:
        pass


class InMemoryMessaging(MessagingProtocol):
    def __init__(self) -> None:
        super().__init__()
        self.messages = Queue()

    def send_message(self, to: str, msg: str) -> bool:
        self.messages.put((to, msg))
        return True

    def receive_message(self) -> str | None:
        if self.messages.empty:
            return None
        return self.messages.get()


class FileMessaging(MessagingProtocol):
    def __init__(self, file_name) -> None:
        super().__init__()
        self.file_name = file_name

    def send_message(self, to: str, msg: str) -> bool:
        with open(self.file_name, "a") as file:
            file.write(f"{to}: {msg}")

        return True

    def receive_message(self) -> str | None:
        with open(self.file_name, "r") as file:
            list_lines = file.readlines()

        if not list_lines:
            return None

        line = list_lines[0]

        with open(self.file_name, "w") as file:
            file.writelines(list_lines[1:])

        return line


class Main:
    def main(self):
        in_memory_messaging = InMemoryMessaging()
        file_messaging = FileMessaging("messages.txt")

        in_memory_messaging.send_message("Julia", "Oi, tudo bem?")
        in_memory_messaging.send_message("Julia", "Como foi o seu dia?")
        in_memory_messaging.send_message(
            "Julia", "Desejo um bom final de semana!"
        )

        file_messaging.send_message("Paulo", "Como tá?")
        file_messaging.send_message("Paulo", "Muito obrigado!")
        file_messaging.send_message("Paulo", "Tenha um ótimo dia!")

        print(in_memory_messaging.receive_message())
        print(in_memory_messaging.receive_message())
        print(in_memory_messaging.receive_message())

        print(file_messaging.receive_message())
        print(file_messaging.receive_message())
        print(file_messaging.receive_message())


if __name__ == "__main__":
    Main().main()
