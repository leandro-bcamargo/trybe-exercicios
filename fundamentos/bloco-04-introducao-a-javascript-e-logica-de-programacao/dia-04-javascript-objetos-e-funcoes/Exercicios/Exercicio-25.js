function findSmallestValue(array) {
    let smallestValue = array[0];
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] < smallestValue) {
            smallestValue = array[i];
        }
    }
    return array.indexOf(smallestValue);
}
