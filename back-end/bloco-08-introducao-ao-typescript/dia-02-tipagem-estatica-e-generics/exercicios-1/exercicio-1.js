var Car = /** @class */ (function () {
    function Car(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    Car.prototype.honk = function () {
        console.log("Bibi");
    };
    Car.prototype.turnOn = function () {
        console.log("Carro ligado");
    };
    Car.prototype.turnOff = function () {
        console.log("Carro desligado");
    };
    Car.prototype.speedUp = function () {
        console.log("Acelerando");
    };
    Car.prototype.speedDown = function () {
        console.log("Desacelerando");
    };
    Car.prototype.stop = function () {
        console.log("Parando");
    };
    Car.prototype.turn = function (direction) {
        console.log("Virando para a ".concat(direction));
    };
    return Car;
}());
var car1 = new Car('Audi', 'Azul', 4);
console.log(car1.honk());
console.log(car1.turnOn());
console.log(car1.turnOff());
console.log(car1.speedUp());
console.log(car1.speedDown());
console.log(car1.stop());
console.log(car1.turn('esquerda'));
