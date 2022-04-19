// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkFunction = (rightAnswers, providedAnswers) => {
  let counter = 0;
  rightAnswers.forEach((answer1, index1) => {
    providedAnswers.forEach((answer2, index2) => {
      if (index1 === index2) {
        if (answer2 === 'N.A') {
          return counter;
        }
        if (answer1 === answer2) {
          return counter += 1;
        }
        return counter -= .5;
      }
    });
  });
  return counter;
}

const answers = (rightAnswers, providedAnswers, providedFunction) => providedFunction(rightAnswers, providedAnswers);

console.log(answers(RIGHT_ANSWERS, STUDENT_ANSWERS, checkFunction))

