import { IPizza } from "./exercicio-3";
import { TCommon } from "./PizzaFlavorTypes";

interface IPizzaCommon extends IPizza {
  flavor: TCommon,
}

export default IPizzaCommon;