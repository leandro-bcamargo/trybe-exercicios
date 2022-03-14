// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.
// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
    let arrayEvenNumbers = []
    for (var i = 0; i < vector.length; i += 1) {
        for (var j = 0; j < vector[i].length; j += 1) {
            if (vector[i][j] % 2 === 0) {
                arrayEvenNumbers.push(vector[i][j]);
            }
        }
    }
    return arrayEvenNumbers;
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
console.log(arrayOfNumbers(vector));