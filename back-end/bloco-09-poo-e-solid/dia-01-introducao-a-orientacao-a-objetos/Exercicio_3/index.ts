import Customer from "./Customer";
import Data from "./Data";
import Item from "./Item";
import Order from "./Order";

const leandro = new Customer('Leandro');
const sandwich = new Item('Sanduíche', 10);
const coke = new Item('Coke', 5);
const order = new Order(leandro, [sandwich, coke], 'money', 0.2);
console.log(order);
console.log(order.calculateTotal());
console.log(order.calculateTotalWithDiscount());

const testDate = new Data(14, 2, 1989);
console.log(testDate);