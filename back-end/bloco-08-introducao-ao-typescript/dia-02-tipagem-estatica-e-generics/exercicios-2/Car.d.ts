export default class Car {
    private _brand;
    private _color;
    private _doors;
    constructor(brand: string, color: string, doors: number);
    get color(): string;
    get brand(): string;
    get doors(): number;
    honk(): void;
    turnOn(): void;
    turnOff(): void;
    speedUp(): void;
    speedDown(): void;
    stop(): void;
    turn(direction: string): void;
}
