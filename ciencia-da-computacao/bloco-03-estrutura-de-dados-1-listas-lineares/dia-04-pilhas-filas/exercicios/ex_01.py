from linked_list_content import LinkedList


class Queue:
    def __init__(self) -> None:
        self._data = LinkedList()

    def enqueue(self, value):
        self._data.insert_last(value)

    def dequeue(self, value):
        if len(self._data) == 0:
            return None

        return self._data.remove_first()

    def peek(self, value):
        if len(self._data) == 0:
            return None

        return self._data.head_value

    def is_empty(self):
        return len(self._data) == 0
