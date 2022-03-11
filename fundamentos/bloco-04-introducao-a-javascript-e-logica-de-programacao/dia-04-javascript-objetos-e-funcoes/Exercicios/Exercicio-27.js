function findMostRepeated(array) {
    let arrayPoints = []
    let counter = 0;
    for (let i = 0; i < array.length; i += 1) {
        for(let j = 0; j < array.length; j += 1) {
            if (array[i] === array[j]) {
                counter += 1;
            }
        }
        arrayPoints.push(counter);
        counter = 0;
    }

    let biggestValue = 0;
    for (let j = 0; j < arrayPoints.length; j += 1)
        if (arrayPoints[j] > biggestValue) {
            biggestValue = arrayPoints[j];
        }
    
    let biggestIndex = arrayPoints.indexOf(biggestValue);
    return array[biggestIndex];

}

let testArray = [2, 3, 2, 5, 8, 2, 3];
console.log(findMostRepeated(testArray));


// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .