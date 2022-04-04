const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const growingOrder = (array) => {
    for (let i = 0; i < array.length; i += 1) {
        for (let j = 0; j < array.length; j += 1) {
            if (j > i) {
                if (array[j] < array[i]) {
                    let temp = array[j];
                    array[j] = array[i];
                    array[i] = temp;
                }
            }
        }
        
    }
    return `Os números ${array} se encontram ordenados de forma crescente!`;
}

console.log(growingOrder(oddsAndEvens));



// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.
const growingOrderSort = (array) => `Os números ${array.sort(function(a, b){return a - b})} se encontram ordenados de forma crescente!`

console.log(growingOrderSort(oddsAndEvens));