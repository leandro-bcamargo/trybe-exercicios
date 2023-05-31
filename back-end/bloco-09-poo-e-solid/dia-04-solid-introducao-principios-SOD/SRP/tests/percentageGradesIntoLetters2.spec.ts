import { expect } from "chai";
import { percentageGradesIntoLetters } from "../src/indext5";

describe('Testando funcao percentageGradesIntoLetters', function() {
  describe('quando é passado um array de disciplinas validas', function() {
    const disciplines = [
      {name: 'name', grade: 0.9},
      {name: 'name', grade: 0.8},
      {name: 'name', grade: 0.7},
      {name: 'name', grade: 0.6},
      {name: 'name', grade: 0.5},
      {name: 'name', grade: 0.4},
    ];

    const student = {
      name: 'Lee',
      school: {
        name: 'Standard',
        approvalGrade: 0.7,
      },
      disciplines,
    };

    const resultDisciplines = percentageGradesIntoLetters(student);

    const expectedGrades = ['A', 'B', 'C', 'D', 'E', 'F'];

    const givenGrades = resultDisciplines.disciplines.map(discipline => discipline.letterGrade);

    for (let i = 0; i < disciplines.length; i++) {
      it(`retorna ${givenGrades[i]} para a nota ${disciplines[i].grade}`, function() {
        expect(givenGrades[i]).to.equal(expectedGrades[i])
      })
    }
  })
})
