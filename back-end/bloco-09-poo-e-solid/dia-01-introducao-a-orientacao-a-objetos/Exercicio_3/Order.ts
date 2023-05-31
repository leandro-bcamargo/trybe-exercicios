import Item from './Item';
import Customer from './Customer';

export default class Order {
  private _customer: Customer;
  private _consumedItems: Item[] = Array();
  private _paymentForm: string = String();
  private _discount: number = 0;

  constructor (customer: Customer, consumedItems: Item[], paymentForm: string, discount: number) {
    this._customer = customer;
    this.consumedItems = consumedItems;
    this.paymentForm = paymentForm;
    this.discount = discount;
  }

  get customer(): Customer {
    return this._customer;
  }

  get consumedItems(): Item[] {
    return this._consumedItems;
  }

  get paymentForm(): string {
    return this._paymentForm;
  }

  get discount(): number {
    return this._discount;
  }

  set customer(newCustomer) {
    this._customer = newCustomer;
  }

  set consumedItems(newConsumedItems) {
    this._consumedItems = newConsumedItems;
  }

  set paymentForm(newPaymentForm) {
    this._paymentForm = newPaymentForm;
  }

  set discount(newDiscount) {
    this._discount = newDiscount;
  }

  calculateTotal(): number {
    return this._consumedItems.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0)
  };

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() - this.discount * this.calculateTotal();
  };
  
}
