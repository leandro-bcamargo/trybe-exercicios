const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNightShift = (object, key, value) => {
  object[key] = value;
}

const listKeys = (object) => {
  let listKeys = Object.keys(object);
  return listKeys;
}

const objectLength = (object) => {
  return listKeys(object).length;
}

const listValues = (object) => {
  return Object.values(object);
}

const allLessons = {}

const addAllLessons = (obj1, obj2, obj3) => {
  addNightShift(obj2, "turno", "noite");
  allLessons.lesson1 = {};
  allLessons.lesson2 = {};
  allLessons.lesson3 = {};
  Object.assign(allLessons.lesson1, obj1);
  Object.assign(allLessons.lesson2, obj2);
  Object.assign(allLessons.lesson3, obj3);
}

addAllLessons(lesson1, lesson2, lesson3);


const totalStudents = (object) => {
  return object.lesson1.numeroEstudantes + object.lesson2.numeroEstudantes + object.lesson3.numeroEstudantes;
}
console.log(totalStudents(allLessons));

const studentsMaths = (object) => {
  let total = object.lesson1.numeroEstudantes + object.lesson3.numeroEstudantes;
  return `Número de estudantes de matemática: ${total}`;
}

console.log(studentsMaths(allLessons));

const report = (teacher) => {
  let new
}

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
// console.log(createReport(allLessons, 'Maria Clara'))
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */