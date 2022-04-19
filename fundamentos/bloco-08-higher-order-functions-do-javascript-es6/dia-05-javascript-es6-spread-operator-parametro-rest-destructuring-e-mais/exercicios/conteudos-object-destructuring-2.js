const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const {name, age, nationality} = user;
const {profession, squad, squadInitials} = jobInfos;

const userJobInfo = {...user, ...jobInfos};

console.log(`Hi, my name is ${userJobInfo.name}, I'm ${userJobInfo.age} years old and I'm ${userJobInfo.nationality}. I work as a ${userJobInfo.profession} and my squad is ${userJobInfo.squad}.`);

// 2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals .
// Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"