from ex_02 import Stack


def reverse_letters(string):
    stack = Stack()
    for char in string:
        if char == ")":
            temp = []
            while stack and stack.peek().value != "(":
                temp.append(stack.pop())
            if stack:
                stack.pop()
            stack.extend(temp)
        else:
            stack.push(char)

    result = ""
    current_node = stack.peek()
    print("current_node_out", current_node)
    while not stack.is_empty():
        current_node = stack.pop()
        print("current_node:", current_node)
        result += current_node

    return result[::-1]


print(reverse_letters("teste(lagel)"))
# print(reverse_letters("(abcd)"))
# print(reverse_letters("(u(love)i)"))
# print(reverse_letters("(ed(et(oc))el)"))
# print(reverse_letters("a(bcdefghijkl(mno)p)q"))
