import { TSweet } from './PizzaFlavorTypes';
import { IPizza } from './exercicio-3';

interface IPizzaSweet extends IPizza {
  flavor: TSweet,
  slices: 4,
}

export default IPizzaSweet;