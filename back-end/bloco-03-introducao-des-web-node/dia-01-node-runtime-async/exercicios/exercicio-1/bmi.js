const readline = require("readline-sync");

const weight = readline.questionFloat("Enter your weight in kg: ");
const height = readline.questionFloat("Enter your height in m: ");

const BMI = weight / height ** 2;

switch (true) {
  case BMI < 18.5:
    console.log("Underweight");
    break;
  case BMI < 25:
    console.log("Normal");
    break;
  case BMI < 30:
    console.log("Overweight Degree I");
    break;
  case BMI < 35:
    console.log("Overweight Degree II");
    break;
  default:
    console.log("Overweight Degrees III to IV");
}
