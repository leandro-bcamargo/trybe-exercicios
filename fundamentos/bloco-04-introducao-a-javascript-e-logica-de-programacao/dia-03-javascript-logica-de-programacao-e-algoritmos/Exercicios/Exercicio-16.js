let biggestPrime = 0;
let isPrime = true;
for (let i = 2; i <= 50; i += 1) {
    for (let j = 2; j < i; j += 1) {
        if (i % j === 0) {
            isPrime = false;
        }
    }
    if (isPrime === false) {
        isPrime = true;
    }
    else {
        biggestPrime = i;
    }
}
console.log(biggestPrime);