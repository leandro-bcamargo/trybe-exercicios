export default class Subject {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this.validateName(newName);
    this._name = newName;
  }

  validateName(name: string):void {
    if (name.length < 3) throw new Error('O nome deve ter ao menos 3 caracteres');
  }
}