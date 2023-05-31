import ConsoleLogger from "./ConsoleLogger";
import Database from "./Database";
import Logger from "./Logger";

export default class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}

  save(key: string, value: string): void {
    this.logger.log(`key: ${key}, value: ${value}`);
  }

}     