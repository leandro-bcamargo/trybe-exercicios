const readline = require('readline-sync');

const weightInKg = readline.questionFloat('Qual o seu peso?');
const heightInCm = readline.questionInt('Qual a sua altura?');

module.exports = calculateBmi = (weight, height) => {
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters ** 2)).toFixed(2);
  switch (true) {
    case bmi < 18.5:
      return "BMI ${bmi}: Abaixo do peso (magreza)";
    case bmi >= 18.5 && bmi <= 24.9:
      return "Peso normal";
    case bmi >= 25 && bmi <= 29.9:
      return "Acima do peso (sobrepeso)";
    case bmi >= 30 && bmi <= 34.9:
      return "Obesidade grau I";
    case bmi >= 35 && bmi <= 39.9:
      return "Obesidade grau II";
    case bmi > 40:
      return "Obesidade grau III e IV";
  }
}

console.log(calculateBmi(weightInKg, heightInCm));

