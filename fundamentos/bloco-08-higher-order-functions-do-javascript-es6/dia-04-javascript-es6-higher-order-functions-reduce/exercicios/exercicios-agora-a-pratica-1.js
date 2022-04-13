const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const flattened = arrays.reduce((accumulator, array) => {
    array.forEach((element) => {
      accumulator.push(element)
    })
    return accumulator;
  },[])
  return flattened;
}

  console.log(flatten());

// 1 - Dada uma matriz, transforme em um array.

