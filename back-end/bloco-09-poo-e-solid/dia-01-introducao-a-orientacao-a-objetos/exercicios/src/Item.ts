export default class Item {
  private _order: string;
  private _price: number;
  
  constructor(order: string, price: number) {
    this._order = order;
    this._price = price;
  }
  
  public get order(): string {
    return this._order;
  }
  
  public set order(value: string) {
    this._order = value;
  }

  public get price(): number {
    return this._price;
  }
  
  public set price(value: number) {
    this._price = value;
  }
}