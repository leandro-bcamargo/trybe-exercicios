import { describe } from "mocha"
import { approvedStudents } from "../src/index2"
import { expect } from "chai"

const disciplinesDict = {
  mathematics: 'matematica',
  history: 'historia',
}

describe('testando a função approvedStudents', function() {
  describe('quando todas as notas são maiores que 0.7', function() {
    it('retorna true', function() {
      const disciplines = [
        {name: disciplinesDict.mathematics, grade: 0.8},
        {name: disciplinesDict.history, grade: 0.9}
      ];

      const student = {
        name: 'test',
        disciplines,
      }

      const result = approvedStudents(student);

      expect(result).to.be.true;
    })
  })

  describe('quando todas as notas são menores que 0.7', function() {
    it('retorna false', function() {
      const disciplines = [
        {name: disciplinesDict.mathematics, grade: 0.5},
        {name: disciplinesDict.history, grade: 0.3}
      ];

      const student = {
        name: 'test',
        disciplines,
      }

      const result = approvedStudents(student);

      expect(result).to.be.false;
    })
  })
  
  describe('quando alguma nota é 0.7', function() {
    it('retorna false', function() {
      const disciplines = [
        {name: disciplinesDict.mathematics, grade: 0.8},
        {name: disciplinesDict.history, grade: 0.5},
      ]

      const student = {
        name: 'test',
        disciplines,
      }

      const result = approvedStudents(student);

      expect(result).to.be.false;
    })
  })
})
