// const calcularDivisao = (num1, num2) => {
//   if (num2 === 0) {
//     throw new Error('Não se pode dividir por zero.')
//   }
//   const resultado = num1 / num2;
//   return resultado;
// }

// try {
//   const resultado = calcularDivisao(2, 0)
//   console.log(resultado);
// } catch(err) {
//   console.log(err.message);
// };

const calcularDivisao = (num1, num2) => {
  if (num2 === 0) throw new Error('Não se pode dividir por zero');
  return num1/num2;
}

try {
  const result = calcularDivisao(2, 1);
  console.log(result);
} catch(err) {
  console.log(err.message);
}