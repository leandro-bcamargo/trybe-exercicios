import { Employee } from "./Employee";
import Person from "./Person";
import Subject from "./Subject";

export default class Teacher extends Person implements Employee {
  private _subject: Subject = new Subject('');
  private _salary: number = 0;
  private _registration: string = '';
  private _admissionDate: Date = new Date();
  
  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    this.salary = salary;
    this.subject = subject;
    this.registration = this.generateRegistration();
  }

  public get admissionDate(): Date {
    return this._admissionDate;
  }

  public validateAdmissionDate(date: Date) {
    try {
      if (date.getTime() < new Date().getTime()) {
        throw new Error("Admission date can't be in the future");
      }
    } catch (error) {
      throw error;
    }
  }

  public set admissionDate(value: Date) {
    try {
      this.validateAdmissionDate(value);
      this._admissionDate = value;
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
      this._admissionDate = new Date();
    }
  }
  
  public get registration(): string {
    return this._registration;
  }

  public validateRegistration(registration: string) {
    try {
      if (registration.length < 16) {
        throw new Error('Registration must have at least 16 characters');
      }     
    } catch (error) {
      throw error;
    }
  }

  public set registration(value: string) {
    try {
      this.validateRegistration(value);
      this._registration = value;
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
      this._registration = '';
    }
  }
  
  public get salary(): number {
    return this._salary;
  }

  public validateSalary(salary: number) {
    try {
      if (salary < 0) {
        throw new Error("Salary can't be negative");
      }
    } catch (error) {
      throw error;
    }
  }

  public set salary(value: number) {
    try {
      this.validateSalary(value);
      this._salary = value; 
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
      this._salary = 0;
    }
  }

  public get subject(): Subject {
    return this._subject;
  }

  public set subject(value: Subject) {
    this._subject = value;
  }

  public generateRegistration(): string {
    return Math.random().toString().split(".")[1];
  }
}

const maths = new Subject('maths');
const teacher = new Teacher('leandro', new Date(), 1000, maths);
console.log(teacher);