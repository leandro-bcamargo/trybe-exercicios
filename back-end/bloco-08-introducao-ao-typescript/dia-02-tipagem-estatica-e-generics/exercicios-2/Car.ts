export default class Car {
  private _brand: string;
  private _color: string;
  private _doors: number;

  constructor(brand: string, color: string, doors: number) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;
  }

  public get color(): string {return this._color};

  public get brand(): string {return this._brand};

  public get doors(): number {return this._doors};

  public honk(): void {console.log('honk')};

  public turnOn(): void {console.log('car turned on')};

  public turnOff(): void {console.log('car turned off')};

  public speedUp(): void {console.log('speeding up')};

  public speedDown(): void {console.log('speeding down')};

  public stop(): void {console.log('stopping')};

  public turn(direction: string): void {console.log(`turning ${direction}`)};

}
