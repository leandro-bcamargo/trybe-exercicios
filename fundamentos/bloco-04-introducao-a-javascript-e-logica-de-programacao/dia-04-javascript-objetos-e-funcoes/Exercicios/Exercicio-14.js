function isTriangle(a, b, c) {
    if (a < 0 || b < 0 || c < 0) {
        return "Erro, ângulo inválido"
    }
    if (a + b + c === 180) {
        return true;
    }
    else {
        return false;
    }
}


// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
