export default class Person {
  private _name: string = '';
  private _birthDate: Date = new Date();
  
  constructor(name: string, birthDate: Date) {
    this.name = name;
    this.birthDate = birthDate;
  }
    
  public get birthDate(): Date {
    return this._birthDate;
  }

  public isBirthDateValid (date: Date): boolean | undefined {
    try {
      if (date.getTime() > new Date().getTime()) {
        throw new Error("Birthdate can't be in the future");
      }
      if (new Date().getFullYear() - date.getFullYear() > 120) {
        throw new Error("Birthdate can't be over 120 years ago");
      }  
      return true;
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }

  public set birthDate(value: Date) {
    if (this.isBirthDateValid(value)) this._birthDate = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    if (value.length > 3) this._name = value;
  }
}

// const validPerson = new Person('leandro', new Date('1990-10-10'));
// const invalidPerson = new Person('lucas', new Date('1900-10-10'));