import Item from "./Item";

export default class Order {
  private _name: string;
  private _items: Item[];
  private _paymentMethod: string;
  private _discount?: number | undefined;
  
  constructor(name: string, items: Item[], paymentMethod: string, discount?: number) {
    this._name = name;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get items(): Item[] {
    return this._items;
  }
  public set items(value: Item[]) {
    this._items = value;
  }
  public get paymentMethod(): string {
    return this._paymentMethod;
  }
  public set paymentMethod(value: string) {
    this._paymentMethod = value;
  }
  public get discount(): number | undefined {
    return this._discount;
  }
  public set discount(value: number | undefined) {
    this._discount = value;
  }
  
  getTotal(): number {
    return this.items.reduce((totalPrice, currItem) => totalPrice + currItem.price, 0);
  }

  getTotalWithDiscount(): number {
    const total = this.getTotal();
    if (this.discount) {
      return total - total * this.discount;
    }
    return total;
  }
}

const batata = new Item('Batata frita', 5);
const hamburguer = new Item('Hamburguer', 10);
const order1 = new Order('Lanche', [batata, hamburguer], 'dinheiro');
const order2 = new Order('Lanche', [batata, hamburguer], 'dinheiro', 0.3);

console.log(order1.getTotal());
console.log(order1.getTotalWithDiscount());
console.log(order2.getTotal());
console.log(order2.getTotalWithDiscount());