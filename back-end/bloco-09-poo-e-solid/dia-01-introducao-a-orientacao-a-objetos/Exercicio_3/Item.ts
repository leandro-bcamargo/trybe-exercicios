export default class Item {
  private _orderName: string = String();
  private _price: number = 0;
  
  constructor(orderName: string, price: number) {
    this.orderName = orderName;
    this.price = price;
  }
  
  get orderName(): string {
    return this._orderName;
  }

  get price(): number {
    return this._price;
  }
  
  set orderName(newOrderName: string) {
    this._orderName = newOrderName;
  }
  
  set price(newPrice) {
    this._price = newPrice;
  }
}