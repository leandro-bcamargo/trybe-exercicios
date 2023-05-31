"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log("Bibi");
    }
    turnOn() {
        console.log("Carro ligado");
    }
    turnOff() {
        console.log("Carro desligado");
    }
    speedUp() {
        console.log("Acelerando");
    }
    speedDown() {
        console.log("Desacelerando");
    }
    stop() {
        console.log("Parando");
    }
    turn(direction) {
        console.log(`Virando para a ${direction}`);
    }
}
const car1 = new Car('Audi', 'Azul', 4);
console.log(car1.honk());
console.log(car1.turnOn());
console.log(car1.turnOff());
console.log(car1.speedUp());
console.log(car1.speedDown());
console.log(car1.stop());
console.log(car1.turn('esquerda'));
console.log(car1);
exports.default = Car;
