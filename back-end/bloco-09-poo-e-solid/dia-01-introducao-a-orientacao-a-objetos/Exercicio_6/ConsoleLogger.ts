import Logger from "./Logger";

export default class ConsoleLogger implements Logger {

  log(phrase: string): void {
    console.log(phrase + "ConsoleLogger1");
  }
}