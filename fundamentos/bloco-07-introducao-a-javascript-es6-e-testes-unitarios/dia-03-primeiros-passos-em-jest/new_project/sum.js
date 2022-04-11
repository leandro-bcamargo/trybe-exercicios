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
  let array = word.split('');
  array.forEach((character) => {
    if (character === 'a') {
      array.splice(array.indexOf('a'), 1, 1);
    } else if 
    (character === 'e') {
      array.splice(array.indexOf('e'), 1, 2);
    } else if
    (character === 'i') {
      array.splice(array.indexOf('i'), 1, 3);
    } else if 
    (character === 'o') {
      array.splice(array.indexOf('o'), 1, 4);
    } else if 
      (character === 'u') {
        array.splice(array.indexOf('u'), 1, 5);
    } else if 
    (character === '1') {
      array.splice(array.indexOf('1'), 1, 'a');
    } else if 
    (character === '2') {
      array.splice(array.indexOf('2'), 1, 'e');
    } else if 
    (character === '3') {
      array.splice(array.indexOf('3'), 1, 'i');
    } else if 
    (character === '4') {
      array.splice(array.indexOf('4'), 1, 'o');
    } else if 
    (character === '5') {
      array.splice(array.indexOf('5'), 1, 'u');
    }
  });
  let result = array.join('');
  return result;
}
console.log(encode('aeiou'));
console.log(encode('12345'));

// const decode = () => {

// }

module.exports = {sum, myRemove, myFizzBuzz, encode};

let random = [1, 2, 3];
random.forEach((number) => {
  if (number === 1) {
    random.splice(random.indexOf(1), 1, 4);
  }
})
console.log(random);