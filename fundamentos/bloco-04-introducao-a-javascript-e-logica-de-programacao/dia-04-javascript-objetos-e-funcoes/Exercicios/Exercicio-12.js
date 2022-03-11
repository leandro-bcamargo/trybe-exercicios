// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

function biggestValue(a, b, c) {
    if (a >= b && a >= c) {
        return "O maior valor é", a;
    }
    else if (b >= a && b >= c) {
        return "O maior valor é", b;
    }
    else if (c >= a && c >= b) {
        return "O maior valor é", c;
    }
}

console.log(biggestValue(12, 17, 17));