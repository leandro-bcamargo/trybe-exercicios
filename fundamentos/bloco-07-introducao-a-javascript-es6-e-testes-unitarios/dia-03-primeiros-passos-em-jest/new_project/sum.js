const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log('yes');
    throw new Error('Parameters must be numbers') 
  }
  return a + b;
}

const myRemove = (arr, item) => {
  let clone = arr.slice(0, arr.length);
  if (clone.includes(item)) {
    clone.splice(arr.indexOf(item), 1);
  }
  return clone;
}

const myFizzBuzz = (num) => {
  if (typeof num !== 'number') {
    return false;
  } else if
  (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if 
  (num % 3 === 0) {
    return 'buzz';
  } else if 
  (num % 5 === 0) {
    return 'fizz';
  }
  return num;
}

const encode = (word) => {
  let string = word.split();
  string.forEach((character) => {
    if (character === 'a') {
      character = 1;
    } else if 
    (character === 'e') {
      character = 2;
    } else if
    (character === 'i') {
      character = 3;
    } else if 
    (character === 'o') {
      character = 4;
    } else if 
      (character === 'i') {
        character = 5;
      }
    return string;


  })

const decode = () => {

}

module.exports = {sum, myRemove, myFizzBuzz, encode, decode};