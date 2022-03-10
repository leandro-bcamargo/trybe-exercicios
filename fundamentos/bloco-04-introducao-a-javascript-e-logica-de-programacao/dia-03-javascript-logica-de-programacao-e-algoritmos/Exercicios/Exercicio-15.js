// Retorna o maior elemento.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestCount = 0;
let longestWord;
for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > biggestCount) {
        biggestCount = array[i].length;
        longestWord = array[i];
    }
}
console.log(longestWord);

// Retorna o menor elemento.
let array2 = ['java', 'javascript', 'python', 'html', 'css'];
let lowestCount = array2[0].length;
let shortestWord;
for (let i = 0; i < array2.length; i += 1) {
    if (array2[i].length <= lowestCount) {
        lowestCount = array2[i].length;
        shortestWord = array2[i];
    }
}
console.log(shortestWord);