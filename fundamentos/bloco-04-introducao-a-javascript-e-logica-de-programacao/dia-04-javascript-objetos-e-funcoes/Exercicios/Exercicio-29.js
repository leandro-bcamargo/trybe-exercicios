function isWordEnding (word, ending) {
    let endingLength = ending.length;
    let startingIndex = word.length - endingLength;
    let lastCharacters = ""
    for (let i = startingIndex; i < word.length; i += 1) {
        lastCharacters += word[i];
    }
    if (lastCharacters === ending) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isWordEnding("trybe", "be"));
console.log(isWordEnding("joaofernando", "fernan"));
