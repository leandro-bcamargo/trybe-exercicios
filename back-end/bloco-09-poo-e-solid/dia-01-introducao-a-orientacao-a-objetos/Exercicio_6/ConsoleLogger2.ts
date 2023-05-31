import Logger from "./Logger";

export default class ConsoleLogger2 implements Logger {

  log(phrase: string) {
    console.log(phrase + "ConsoleLogger2");
  }
}