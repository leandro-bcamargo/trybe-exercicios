import MyInterface from "./MyInterface";

export default class myClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    const sum = this.myNumber + myParam;
    return `A soma é ${sum}`; 
  }
}

const classe = new myClass(10);
console.log(classe.myNumber);
console.log(classe.myFunc(15))