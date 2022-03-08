let array = [];

for (let i = 1; i <= 25; i += 1) {
    array.push(i);
    array[i - 1] = i / 2; 
}
console.log(array);