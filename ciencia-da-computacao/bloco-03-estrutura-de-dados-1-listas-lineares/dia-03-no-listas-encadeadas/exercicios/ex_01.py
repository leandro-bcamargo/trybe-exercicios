from node import Node


class LinkedList:
    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        new_value = Node(value)
        original_value = self.head_value

        if self.is_empty():
            return self.insert_first(value)

        original_value = self.get_node_at(len(self) - 1)
        original_value.next = new_value
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)
        original_value = self.get_node_at(position)
        new_value = Node(value)
        new_value.next = original_value.next
        original_value.next = new_value
        self.__length += 1

    def remove_first(self):
        value_to_be_removed = self.head_value
        if value_to_be_removed:
            self.head_value = self.head_value.next
            value_to_be_removed.next = None
            self.__length -= 1
        return value_to_be_removed

    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()

        value_before_last = self.get_node_at(len(self) - 2)

        last_value = value_before_last.next
        value_before_last.next = None
        self.__length -= 1
        return last_value

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        previous_value_to_remove = self.get_node_at(position - 1)

        value_to_remove = previous_value_to_remove.next
        previous_value_to_remove.next = value_to_remove.next
        value_to_remove.next = None
        self.__length -= 1

        return value_to_remove

    def get_element_at(self, position):
        value = None
        node = self.get_node_at(position)
        if value:
            value = Node(node.value)
        return value

    def is_empty(self):
        return not self.__length

    def clear(self):
        for _ in range(len(self)):
            self.remove_first()

    def get_first_node(self):
        return self.head_value

    def get_last_node(self):
        node = self.head_value

        while node.next:
            node = node.next

        return node

    def get_node_at(self, position):
        node = self.head_value

        while position > 0:
            node = node.next
            position -= 1

        return node

    def index_of(self, value):
        node = self.head_value
        index = 0

        while node:
            if node.value == value:
                return index
            node = node.next
            index += 1
        return -1


# Para testar, apenas rode o arquivo com: `python3 linked_list_content.py` :)
if __name__ == "__main__":
    linked_list = LinkedList()

    print(linked_list.is_empty())  # saída: True
    linked_list.insert_first(1)
    print(
        linked_list
    )  # saída: LinkedList(len=1 value=Node(value=1 next=None))

    linked_list.insert_first(2)
    print(
        linked_list
    )  # saída: LinkedList(len=2 value=Node(value=2 next=Node(value=1 next=None)))

    linked_list.insert_last(3)
    print(
        linked_list
    )  # saída: LinkedList(len=3 value=Node(value=2 next=Node(value=1 next=Node(value=3 next=None))))

    linked_list.remove_last()
    print(
        linked_list
    )  # saída: LinkedList(len=2 value=Node(value=2 next=Node(value=1 next=None)))

    linked_list.remove_first()
    print(
        linked_list
    )  # saída: LinkedList(len=1 value=Node(value=1 next=None))

    linked_list.insert_at(5, 1)
    print(
        linked_list
    )  # saída: LinkedList(len=2 value=Node(value=1 next=Node(value=5 next=None)))

    linked_list.remove_at(0)
    print(
        linked_list
    )  # saída: LinkedList(len=1 value=Node(value=5 next=None))

    linked_list.insert_at(6, 1)
    linked_list.insert_at(7, 2)
    linked_list.insert_at(8, 3)
    linked_list.insert_at(9, 4)
    print(linked_list.get_element_at(3))  # saída: Node(value=8 next=None)
    print(linked_list.get_node_at(3))
    linked_list.insert_last(10)
    print(linked_list)
    linked_list.remove_last()
    print(linked_list)
    linked_list.remove_at(5)
    print(linked_list)
    print(linked_list.index_of(7))
    print(linked_list.get_first_node())
    print(linked_list.get_last_node())
