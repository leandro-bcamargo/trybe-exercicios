class Superclass {
  public isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log('Olá, mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc = (classType: Superclass) => {
  console.log(classType.isSuper ? 'Super!' : 'Sub!');
}

const class1 = new Superclass();
const class2 = new Subclass();

myFunc(class1);
myFunc(class2);

export {}