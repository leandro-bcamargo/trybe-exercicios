let word = 'tryber';
let wordReverse = "";
let position = word.length - 1;
for (let i = 0; i < word.length; i += 1) {
    wordReverse += word[position - i];
}
console.log(wordReverse);