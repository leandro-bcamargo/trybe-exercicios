interface Logger {
  log: (text: string) => void
}

interface Database {
  logger: Logger
  save: (key: string, value: string) => void
}

class ConsoleLogger implements Logger {
  log (text: string): void {
    console.log(text)
  }
}

class ConsoleLogger2 implements Logger {
  log (text: string): void {
    console.log(`Aqui está o texto: ${text}`)
  }
}

class ExampleDatabase implements Database {
  constructor (public readonly logger: Logger = new ConsoleLogger()) {}

  save (key: string, value: string): void {
    this.logger.log(`key: ${key}, value: ${value}`)
  }
}

const logger1: Logger = new ConsoleLogger()
const logger2: Logger = new ConsoleLogger2()
const db1: Database = new ExampleDatabase(logger1)
const db2: Database = new ExampleDatabase(logger2)
const db3: Database = new ExampleDatabase()

db1.save('mensagem', 'Hello, world')
db2.save('mensagem', 'Hello, world')
db3.save('mensagem', 'Hello, world')
