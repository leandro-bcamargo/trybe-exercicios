import {IPizza, TPizzaComum, TPizzaDoce, TPizzaVegetariana} from "./exercicio-3";
import IPizzaCommon from "./PizzaCommon";
import IPizzaSweet from "./PizzaSweet";
import IPizzaVegetarian from "./PizzaVegetarian";

const calabresa: IPizza = {
  flavor: 'calabresa',
  slices: 8,
}

const marguerita: IPizza = {
  flavor: 'marguerita',
  slices: 6,
}

const nutella: IPizza = {
  flavor: 'nutella',
  slices: 4,
}

const comumCalabresa: IPizzaCommon = {
  flavor: "Calabresa",
  slices: 6,
}

const comumFrango: IPizzaCommon = {
  flavor: "Frango",
  slices: 8,
}

const comumPepperoni: IPizzaCommon = {
  flavor: "Pepperoni",
  slices: 4,
}

const vegetarianaCogumelo: IPizzaVegetarian = {
  flavor: "Cogumelo",
  slices: 6,
}

const vegetarianaPalmito: IPizzaVegetarian = {
  flavor: "Palmito",
  slices: 4,
}

const doceGoiabada: IPizzaSweet = {
  flavor: "Goiabada com queijo",
  slices: 4,
}

console.log(comumCalabresa);
console.log(comumFrango);
console.log(comumPepperoni);
console.log(vegetarianaPalmito);
console.log(vegetarianaCogumelo);
console.log(doceGoiabada);

type Icallback<T> = (item: T, index?: number, array?: T[]) => boolean;


function myFilter<T> (array: T[], callback: Icallback<T>): T[] {
  const result: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) result.push(array[i]);
  };

  return result;
} 

console.log(myFilter<number>([1, 2, 3, 4], (item) => item < 3));
console.log(myFilter<string>(['a', 'b', 'c'], (item) => item !== 'a'));
