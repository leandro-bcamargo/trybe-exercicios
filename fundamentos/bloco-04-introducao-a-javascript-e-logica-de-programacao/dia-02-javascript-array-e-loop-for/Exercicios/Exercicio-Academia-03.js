/*
08 - Descubra a idade mínima
Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza e retorne a mensagem informando a pessoa mais jovem no seguinte formato:
---------------------------------------------------
"x é a pessoa mais jovem e possui y anos de idade."
---------------------------------------------------
*/

function findYoungerPerson(marinaAge, silviaAge, izaAge){
    // Desenvolva seu código nessa função
    let marinaAge = 40;
    let silviaAge = 20;
    let izaAge = 30;
    let names = [marinaAge, silviaAge, izaAge];
    let youngestAge = names[0];

    for (let i = 0; i < names.length; i += 1) {
        if (names[i] < youngestAge) {
            youngestAge = names[i];
        }
    }

    switch (youngestAge) {
        case marinaAge:
            youngestName = "Marina";
            break;
        case silviaAge:
            youngestName = "Silvia";
            break;
        case izaAge:
            youngestName = "Iza";
            break;
    }

    console.log(youngestName, "é a pessoa mais jovem e possui", youngestAge, "anos de idade.");
}
  
  module.exports = findYoungerPerson;