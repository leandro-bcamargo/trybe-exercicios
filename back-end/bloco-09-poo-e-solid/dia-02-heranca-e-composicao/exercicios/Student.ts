import Person from "./Person";

class Student extends Person {
  private _enrollment: string = '';
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment() || '';
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public set enrollment(value: string) {
    this._enrollment = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }

  public set examsGrades(grades: number[]) {
    if (grades.length <= 4) {
      this._examsGrades = grades;
    }
  }

  public get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  public set assignmentsGrades(grades: number[]) {
    if (grades.length <= 2) {
      this._assignmentsGrades = grades;
    }
  }

  public sumGrades(): number {
    return [...this.examsGrades, ...this.assignmentsGrades].reduce((total, currGrade) => total + currGrade);
  }

  public averageGrade(): number {
    const allGrades = [...this.examsGrades, ...this.assignmentsGrades];
    const numberOfGrades = allGrades.length;
    return this.sumGrades() / numberOfGrades;
  }

  public generateEnrollment(): string | undefined {
    try {
      const enrollment = Math.random().toString().split(".")[1];
      if (this.isEnrollmentValid(enrollment)) {
        return enrollment
      }
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  }

  private isEnrollmentValid(enrollment: string): boolean | undefined {
    try {
      if (enrollment.length < 16) {
        throw new Error('Enrollment must have at least 16 characters');
      }
      return true;
    } catch (error) {
      throw error;
    }
  }
}

const student = new Student('leandro', new Date());
student.assignmentsGrades = [1, 2, 3];
student.examsGrades = [1];
console.log(student)