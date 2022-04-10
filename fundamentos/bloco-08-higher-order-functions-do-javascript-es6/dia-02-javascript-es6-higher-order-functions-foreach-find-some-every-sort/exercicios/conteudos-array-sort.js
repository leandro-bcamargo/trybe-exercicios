// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const orderByAge = () => {
  people.sort((personA, personB) => {
    return personA.age - personB.age;
  })
};
// Adicione se código aqui
orderByAge();
console.log(people);

// 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente .

const orderByAgeReverse = () => {
  people.sort((personA, personB) => {
    return personB.age - personA.age;
  })
};
orderByAgeReverse();
console.log(people);