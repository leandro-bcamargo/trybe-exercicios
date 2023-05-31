// const calcularDivisao = (num1, num2) => {
//   const promise = new Promise((res, rej) => {
//     if (num2 === 0) rej(new Error("Não se pode dividir por 0"));
//     res(num1/num2);
//   });
//   return promise;
// };

// calcularDivisao(2, 0)
// .then(result => console.log(result))
// .catch(error => console.log(error.message));

const calcularDivisao = (num1, num2) => {
  const promise = new Promise((res, rej) => {
    if (num2 === 0) rej(new Error('Não se dividir por zero'));
    res(num1/num2);
  })
  return promise;
}

calcularDivisao(2, 1)
.then(result => console.log(result))
.catch(err => console.log(err.message));