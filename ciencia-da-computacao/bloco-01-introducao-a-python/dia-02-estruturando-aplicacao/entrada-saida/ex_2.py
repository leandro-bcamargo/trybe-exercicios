numbers = input("Digite números inteiros separados por espaço: ")
list_of_numbers = numbers.split(" ")
has_invalid_value = False
sum = 0
for number in list_of_numbers:
    if not number.isdigit():
        print(f"Erro ao somar valores, {number} é um valor inválido")
        has_invalid_value = True
        break
    sum += int(number)

if not has_invalid_value:
    print(sum)
