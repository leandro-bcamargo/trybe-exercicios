interface Dog {
  _name: string;
  _color: string;
  _age: number;
  bark(intensity: string): string;
}

class Dog {
  constructor(name: string, color: string, age: number) {
    this._name = name;
    this._color = color;
    this._age = age;
  }

  bark(intensity: string): string {
    return (`${this._name} barks ${intensity}`);
  }
}

const dog1 = new Dog('Fido', 'white', 8);
console.log(dog1);
console.log(dog1.bark('intensely'));