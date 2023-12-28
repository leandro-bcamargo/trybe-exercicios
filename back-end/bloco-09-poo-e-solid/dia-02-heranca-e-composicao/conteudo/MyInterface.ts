interface MyInterface {
  myNumber: number,
  myFunc: (myParam: number) => string,
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {};

  myFunc(myParam: number) {
    const sum = this.myNumber + myParam;
    return `The sum is ${sum}`;
  }
}

const class1 = new MyClass(10);
console.log(class1.myFunc(20));

export {}