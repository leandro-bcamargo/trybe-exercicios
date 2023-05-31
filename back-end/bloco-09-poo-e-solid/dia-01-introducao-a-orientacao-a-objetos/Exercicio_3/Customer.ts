export default class Customer {
  private _name: string = String();
  
  constructor(name: string) {
    this.name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }
}