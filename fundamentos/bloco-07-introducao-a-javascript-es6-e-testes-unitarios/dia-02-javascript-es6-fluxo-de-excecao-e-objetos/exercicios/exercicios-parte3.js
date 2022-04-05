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
// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const getValueByNumber = (object, position) => {
  let arrayValues = Object.values(object);
  return arrayValues[position];
}

console.log(getValueByNumber(lesson1, 0));

const verifyPair = (object, key, value) => {
  let entries = Object.entries(object);
  for (entry of entries) {
    if (entry[0] === key && entry[1] === value)  {
      return true;
    }
  }
  return false;
}
