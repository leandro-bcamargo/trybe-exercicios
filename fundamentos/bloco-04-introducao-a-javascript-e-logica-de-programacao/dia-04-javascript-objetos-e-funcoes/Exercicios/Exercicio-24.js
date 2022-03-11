function findBiggestValue(array) {
    let biggestValue = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] > biggestValue) {
            biggestValue = array[i];
        }
    }
    return array.indexOf(biggestValue);
}
