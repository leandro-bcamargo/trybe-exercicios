export default class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  get name(): string {return this._name};
  set name(newName: string) {
    if (newName.length < 3) throw new Error('O nome deve ter no mínimo 3 caracteres');
    else this._name = newName;
  };
  get birthDate(): Date {
    return this._birthDate;
  }
  set birthDate(newBirthDate: Date) {
    const currDate = new Date();
    if (newBirthDate.getTime() - currDate.getTime() > 0) throw new Error('A data de nascimento não pode ser uma data futura.');
    if ((currDate.getTime() - newBirthDate.getTime())/1000*3600*24*365 > 120) throw new Error('A pessoa não pode ter mais de 120 anos.')
    else this._birthDate = newBirthDate;
  }
}

try {
  const person = new Person('John', new Date('1989-02-14'));
  console.log(person.name);
  person.birthDate = new Date('1900-02-14');
  console.log(person.birthDate);
} catch(err: any) {
  console.error(err.message);
}

