// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:



const longestWord = (phrase) => {
    let longestWord = '';
    let words = phrase.split(' ');
    for (word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')) // retorna 'aconteceu'
