function findBiggestNumberCharacters(array) {
    let biggestNumberCharacters = 0;
    let indexBiggestNumberCharacters = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (array[i].length > biggestNumberCharacters) {
            biggestNumberCharacters = array[i].length;
            indexBiggestNumberCharacters = i;
        }
    }
    return array[indexBiggestNumberCharacters];
}

let testArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(findBiggestNumberCharacters(testArray));
