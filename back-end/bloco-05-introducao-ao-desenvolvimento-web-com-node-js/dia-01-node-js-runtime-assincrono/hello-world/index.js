const readline = require('readline-sync');

const name = readline.question('What\'s your name? ');
const age = readline.questionInt('What\s your age? ');

console.log(`Hello, ${name}! You are ${age} years old!`);