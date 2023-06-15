from linked_list_content import LinkedList


class Stack:
    def __init__(self) -> None:
        self._data = LinkedList()

    def __str__(self) -> str:
        return f"_data -> {self._data}"

    def push(self, value):
        self._data.insert_last(value)

    def pop(self):
        return self._data.remove_last().value

    def peek(self):
        return self._data.get_element_at(len(self._data) - 1)

    def is_empty(self):
        return not len(self._data)

    def min_value(self):
        if not len(self._data):
            return None

        min_node = self._data.head_value
        current_node = self._data.head_value

        while current_node.next:
            if current_node.next.value < min_node.value:
                min_node = current_node.next

            current_node = current_node.next

        return min_node.value

    def extend(self, list):
        for element in list:
            self._data.insert_last(element)

        return self._data


if __name__ == "__main__":
    elements = [2, 1, 5, 4, 10, 6, 8, 22, 11, 10]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)

    # saída: 1
    print(content_stack.min_value())
    content_stack.push(-5)
    # saída: -5
    print(content_stack.min_value())
