const readline = require('readline-sync');

const fibonacci = () => {
  try {
    const n = readline.questionInt("Quantos números?");
    if (n <= 0) throw new Error("O número deve ser maior que 0");
    const array = [];
    for (let i = 0; i < n; i++) {
      if (array.length < 2) array.push(1);
      else array.push(array[i - 2] + array[i - 1]);
    }
    console.log(array);
  } catch(err) {
    console.log(err.message);
  }
}

const bonus2 = (par1, par2, par3) => {
  return new Promise((res, rej) =>{
    if (typeof par1 !== 'number' || typeof par2 !== 'number' || typeof par3 !== 'number') rej(new Error("Informe apenas números"));
    const result = (par1 + par2) * par3;
    if (result < 50) rej(new Error("Valor muito baixo"));
    if (result > 50) res(result);
  })
}

// fibonacci();
bonus2(10, 10, 10)
.then(result => console.log(result))
.catch(error => console.log(error.message));