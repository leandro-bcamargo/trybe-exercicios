def isTriangle(sides):
    a, b, c = sides
    if not (a + b > c and a + c > b and b + c > a):
        return "não é triângulo"
    if a == b == c:
        return "triângulo equilátero"
    if a == b or a == c or b == c:
        return "triângulo isósceles"
    return "triângulo escaleno"


print(isTriangle([1, 2, 8]))
