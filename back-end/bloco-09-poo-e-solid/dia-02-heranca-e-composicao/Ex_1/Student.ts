import Person from "./Person";

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate)
    this._enrollment = this.generateEnrollment();
    this._examsGrades = [];
    this._assignmentsGrades = [];
  }

  get enrollment (): string {
    return this._enrollment;
  }

  set enrollment(newEnrollment: string) {
    this.validateEnrollment(newEnrollment);
    this._enrollment = newEnrollment;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(newExamsGrades: number[]) {
    this.validateExamsGrades(newExamsGrades);
    this._examsGrades = newExamsGrades;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(newAssignmentsGrades: number[]) {
    this.validateAssignmentsGrades(newAssignmentsGrades);
    this._assignmentsGrades = newAssignmentsGrades;
  }

  sumGrades(): number {
    return [...this._examsGrades, ...this._assignmentsGrades].reduce((acc, curr) => acc + curr, 0);
  };

  sumAvgGrade(): number {
    return this.sumGrades() / [...this._assignmentsGrades, ...this._examsGrades].length;
  };

  generateEnrollment(): string {
    return "matricula-" + String(Math.floor(Math.random() * 1000000001)); 
  };

  validateEnrollment(enrollment: string): void {
    if (enrollment.length < 16) throw new Error('A matrícula deve ter ao menos 16 caracteres');
  };

  validateExamsGrades(grades: number[]): void {
    if (grades.length > 4) throw new Error('Deve haver no máximo 4 notas de exame')
  };

  validateAssignmentsGrades(grades: number[]): void {
    if (grades.length > 2) throw new Error('Deve haver no máximo 2 notas de trabalho')
  };
};



