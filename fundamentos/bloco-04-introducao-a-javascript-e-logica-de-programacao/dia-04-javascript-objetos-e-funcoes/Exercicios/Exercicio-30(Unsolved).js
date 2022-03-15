// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// Dicas:
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:
// Copiar
// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |

// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

let object = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
}

// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

const numerosRomanos = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };
  
  function romanoParaDecimal(numero) {
    numero = numero.toLowerCase();
    const len = numero.length;
    let soma = numerosRomanos[numero[len - 1]]; // Pega o número associado ao último algarismo do número romano
    let atual = numerosRomanos[numero[len - 1]]; // Também pega o número associado ao último algarismo do número romano
    for (let i = 2; i <= len; i += 1) {
      const prox = numerosRomanos[numero[len - i]]; // Percorre os algarismos romanos à esquerda dos dois últimos
      if (atual <= prox) { 
        soma += prox; 
      } else {
        soma -= prox;
      }
      atual = prox;
    }
    return soma;
  }


  console.log(romanoParaDecimal('MMXVIII')); // 2018
  console.log(romanoParaDecimal('VI')); // 6
  console.log(romanoParaDecimal('IV')); // 4