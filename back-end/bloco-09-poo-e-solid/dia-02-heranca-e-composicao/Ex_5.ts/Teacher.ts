import Person from "../Ex_1/Person";
import Employee from "../Ex_3/Employee";
import Subject from "../Ex_4.ts/Subject";

export default class Teacher extends Person implements Employee {
  private _subject: Subject;
  // private _salary:number;
  private _admissionDate: Date;
  private _registration: string;

    constructor(name: string, birthDate: Date, private _salary: number, subject: Subject) {
      super(name, birthDate);
      // this.validateSalary(salary);
      this.salary = _salary;
      this._subject = subject;
      this._admissionDate = new Date();
      this._registration = this.generateRegistration();

    }
    
  get salary(): number {
    return this._salary;
  }

  set salary(newSalary: number) {
    this.validateSalary(newSalary);
    this._salary = newSalary;
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(newSubject: Subject) {
    this._subject = newSubject;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(newRegistration: string) {
    this.validateRegister(newRegistration);
    this._registration = newRegistration;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(newAdmissionDate: Date) {
    this.validateAdmissionDate(newAdmissionDate);
    this._admissionDate = newAdmissionDate;
  }

  validateRegister(register: string) {
    if(register.length < 16) throw new Error('O registro deve ter ao menos 16 caracteres.')
  }

  validateSalary(salary: number) {
    if(salary < 0) throw new Error('O salário não pode ser negativo');
  }

  validateAdmissionDate(admissionDate: Date) {
    if (admissionDate.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser futura');
  }

  generateRegistration(): string {
    return 'registration-' + String(Math.floor(Math.random()*100001));
  }
}