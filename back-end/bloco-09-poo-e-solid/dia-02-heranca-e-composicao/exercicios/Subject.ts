export default class Subject {
  private _name: string = '';
  
  constructor(name: string) {
    this.name = name;
  }
  
  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    try {
      if (value.length >= 3) {
        this._name = value;
      }
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  }
}

const subj = new Subject('ma');
console.log(subj);