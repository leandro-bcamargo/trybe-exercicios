let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };


let arrayKeys = [];
for (key in moradores['blocoDois'][1]) {
    arrayKeys.push(key);
}
let keyName = arrayKeys[0];
let keyLastName = arrayKeys[1];
let keyFloor = arrayKeys[2];
let keyApartment = arrayKeys[3];
let valueName = moradores['blocoDois'][1]['nome'];
let valueLastName = moradores['blocoDois'][1]['sobrenome'];
let valueFloor = moradores['blocoDois'][1]['andar'];
let valueApartment = moradores['blocoDois'][1]['apartamento'];
  console.log("O morador do bloco 2 de", keyName, valueName, valueLastName, "mora no", valueFloor + "°", keyFloor, "do", keyApartment, valueApartment + ".");
  // 4 - Acesse as chaves nome , sobrenome , andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".