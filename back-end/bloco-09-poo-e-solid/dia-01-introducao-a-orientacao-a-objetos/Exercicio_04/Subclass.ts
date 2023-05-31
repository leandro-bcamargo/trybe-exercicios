import Superclass from "./Superclass";

export default class Subclass extends Superclass {
  constructor(isSuper: boolean) {
    super(false);
  }
}

const myFunc = (obj: Superclass) => {
  obj.isSuper ? console.log("Super!") : console.log("False!");
}
const objSuper = new Superclass(true);
const objSub = new Subclass(false)
myFunc(objSuper);
myFunc(objSub);