function sumUpTo(number) {
    let sum = 0;
    for (var i = 0; i <= number; i += 1) {
        sum += i;
    }
    return sum;
}

console.log(sumUpTo(5))
