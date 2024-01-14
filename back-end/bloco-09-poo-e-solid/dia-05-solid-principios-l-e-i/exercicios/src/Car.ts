import { ICar } from "./interfaces";

export default class Car implements ICar {
  drive() {
    console.log('Driving');
  }
}