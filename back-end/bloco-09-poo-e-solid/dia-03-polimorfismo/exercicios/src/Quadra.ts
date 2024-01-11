import { Agenda } from "./interfaces/Agenda";

abstract class Quadra { 
  abstract reservar<T>(data: Date): Agenda<T>;

}

export default Quadra;