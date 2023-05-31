import { IPizza } from "./exercicio-3";
import { TVegetarian } from "./PizzaFlavorTypes";

interface IPizzaVegetarian extends IPizza {
  flavor: TVegetarian,
}

export default IPizzaVegetarian;