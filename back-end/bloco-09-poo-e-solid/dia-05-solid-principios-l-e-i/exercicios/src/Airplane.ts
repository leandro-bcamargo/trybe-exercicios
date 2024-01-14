import { IAirplane } from "./interfaces";

export default class Airplace implements IAirplane {
  fly(): void {
    console.log('Flying');
  }
}