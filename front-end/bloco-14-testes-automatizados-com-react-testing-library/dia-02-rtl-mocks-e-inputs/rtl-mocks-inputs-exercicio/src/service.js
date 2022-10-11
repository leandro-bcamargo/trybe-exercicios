
export const generateRandomNumber = () => {
  return Math.floor(Math.random() * 101);
}

export const makeUpperCase = (string) => {
  return string.toUpperCase();
}


export const getFirstCharater = (string) => {
  return string[0];
}

export const concatenate = (string1, string2) => {
  return string1 + string2;
}

export const fetchDog = async () => {
  try {
    const result = await fetch('https://dog.ceo/api/breeds/image/random');
    const json = await result.json();
    return json;
  } catch (error) {
    return error;
  }
}

module.exports = {generateRandomNumber, makeUpperCase, getFirstCharater, concatenate, fetchDog};