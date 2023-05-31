import { expect } from "chai"
import { percentageGradesIntoLetters } from "../src/index2"
import { getLetterGrades } from "../src/index3"

const disciplinesDict = {
  mathematics: 'matematica',
}

describe('Testando a função getLetterGrades', function() {
  describe('Quando a nota é maior ou igual a 0.9', function() {
    it('Retorna A', function() {
      const discipline = {
        name: 'matematica',
        grade: 0.9,
      }

      const { letterGrade } = getLetterGrades(discipline);

      expect(letterGrade).to.be.equal('A')
    })
  })

  describe('Quando a nota é maior ou igual a 0.8', function() {
    it('Retorna B', function() {
      const discipline = {
        name: 'matematica',
        grade: 0.8,
      }

      const { letterGrade } = getLetterGrades(discipline);

      expect(letterGrade).to.be.equal('B');    
    })
  })

  describe('Quando a nota é maior ou igual a 0.7', function() {
    it('Retorna C', function() {
      const discipline = {
        name: 'matematica',
        grade: 0.7,
      }

      const { letterGrade } = getLetterGrades(discipline);

      expect(letterGrade).to.be.equal('C');
    })
  })
  
  describe('Quando a nota é maior ou igual a 0.6', function() {
    it('Retorna D', function() {
      const discipline = {
        name: 'matematica',
        grade: 0.6,
      }

      const { letterGrade } = getLetterGrades(discipline);

      expect(letterGrade).to.be.equal('D');
    })
  })

  describe('Quando a nota é maior ou igual a 0.5', function() {
    it('Retorna E', function() {
      const discipline = {
        name: 'matematica',
        grade: 0.5,
      }

      const { letterGrade } = getLetterGrades(discipline);

      expect(letterGrade).to.be.equal('E');
    });
  })

  describe('Quando a nota é menor que 0.5', function() {
    it('Retorna F', function() {
      const student = {
        name: 'Maria',
        disciplines: [
          {name: disciplinesDict.mathematics, grade: 0.4}
        ]
      }

      const {disciplines: [{letterGrade}]} = percentageGradesIntoLetters(student);

      expect(letterGrade).to.be.equal('F');
    })
  })
})