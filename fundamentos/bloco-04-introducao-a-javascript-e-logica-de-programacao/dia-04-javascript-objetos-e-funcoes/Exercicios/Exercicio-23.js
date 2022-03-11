function isPalindrome(word) {
    let wordArray = word.split("");
    let wordArrayReverse = wordArray.reverse();
    let wordReverse = wordArrayReverse.join("");
    if (word === wordReverse) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPalindrome('arara'));
console.log(isPalindrome('desenvolvimento'));


// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false