class Car {
  public brand: string;
  public color: string;
  public doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log("Bibi");
  }

  turnOn(): void {
    console.log("Carro ligado");
  }

  turnOff(): void {
    console.log("Carro desligado");
  }

  speedUp(): void {
    console.log("Acelerando");
  }

  speedDown(): void {
    console.log("Desacelerando");
  }

  stop(): void {
    console.log("Parando");
  }

  turn(direction: string): void {
    console.log(`Virando para a ${direction}`)
  }
}

const car1 = new Car('Audi', 'Azul', 4);
console.log(car1.honk());
console.log(car1.turnOn());
console.log(car1.turnOff());
console.log(car1.speedUp());
console.log(car1.speedDown());
console.log(car1.stop());
console.log(car1.turn('esquerda'))
console.log(car1);

export default Car;
