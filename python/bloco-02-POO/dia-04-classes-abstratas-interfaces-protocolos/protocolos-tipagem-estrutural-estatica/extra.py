number = int(input("Insert a number to obtain its binary form\n"))
result = ""
count = 0
if number < 1:
    while number < 1:
        number *= 2
        count += 1
while number != 0:
    result = str(number % 2) + result
    number = number // 2
print(f"The number's binary form is {result}")
