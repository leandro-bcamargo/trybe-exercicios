import { expect } from 'chai';
import {approvedStudents} from '../src/index';

const disciplinesDict = {
  mathematics: 'matemática',
  history: 'história',
}

describe('Testando função approvedStudents', function() {
  describe('quando todas as notas forem maiores que 0.7', function() {
    it('retorna true', function() {
      const disciplines = [
        {name: disciplinesDict.mathematics, grade: 0.8},
        {name: disciplinesDict.history, grade: 0.9}
      ]

      const student = {
        name: 'test',
        disciplines,
      }

      const result = approvedStudents(student);

      expect(result).to.equal(true);
    })
  })
  describe('quando alguma nota for menor do que 0.7', function() {
    it('retorna false', function() {
      const disciplines = [
        {name: disciplinesDict.mathematics, grade: 0.6},
        {name: disciplinesDict.history, grade: 0.9},
      ]

      const student = {
        name: 'test',
        disciplines,
      }

      const result = approvedStudents(student);

      expect(result).to.equal(false);
    })
  })
})