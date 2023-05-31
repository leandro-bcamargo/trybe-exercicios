import ConsoleLogger from "./ConsoleLogger";
import ConsoleLogger2 from "./ConsoleLogger2";
import ExampleDatabase from "./ExampleDatabase";

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();
const db1 = new ExampleDatabase(logger1);
const db2 = new ExampleDatabase(logger2);
const db3 = new ExampleDatabase();