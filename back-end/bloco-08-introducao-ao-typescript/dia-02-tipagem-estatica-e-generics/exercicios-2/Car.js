"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, color, doors) {
        this._brand = brand;
        this._color = color;
        this._doors = doors;
    }
    get color() { return this._color; }
    ;
    get brand() { return this._brand; }
    ;
    get doors() { return this._doors; }
    ;
    honk() { console.log('honk'); }
    ;
    turnOn() { console.log('car turned on'); }
    ;
    turnOff() { console.log('car turned off'); }
    ;
    speedUp() { console.log('speeding up'); }
    ;
    speedDown() { console.log('speeding down'); }
    ;
    stop() { console.log('stopping'); }
    ;
    turn(direction) { console.log(`turning ${direction}`); }
    ;
}
exports.default = Car;
