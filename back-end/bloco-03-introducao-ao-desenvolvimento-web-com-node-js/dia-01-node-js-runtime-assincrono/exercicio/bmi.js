const readline = require('readline-sync');

const pesoEmKg = readline.questionFloat("Qual o seu peso em kg?");
const alturaEmCms = readline.questionInt("Qual a sua altura em cms?");

const calculateBMI = (weight, height) => {
  const heightInMs = height / 100;
  const imc = Number((weight / heightInMs ** 2).toFixed(2));
  console.log(typeof imc)
  let status;
  switch (true) {
    case imc < 18.5:
      status = "Abaixo do peso (magreza)";
      break;
    case 18.5 <= imc <= 24.9:
      status = "Peso normal";
      break;
    case 25.0 <= imc <= 29.9:
      status = "Acima do peso (sobrepeso)"
      break;
    case 30.0 <= imc <= 34.9:
      status = "Obesidade grau I";
      break;
    case 35.0 <= imc <= 39.9:
      status = "Obesidade grau II";
      break;
    case imc >= 40:
      status = "Obesidade graus III e IV";
  }
  return `Seu IMC é ${imc} e seu status é ${status}`;
}

// Abaixo de 18,5	Abaixo do peso (magreza)
// Entre 18,5 e 24,9	Peso normal
// Entre 25,0 e 29,9	Acima do peso (sobrepeso)
// Entre 30,0 e 34,9	Obesidade grau I
// Entre 35,0 e 39,9	Obesidade grau II
// 40,0 e acima	Obesidade graus III e IV

console.log(calculateBMI(pesoEmKg,alturaEmCms));