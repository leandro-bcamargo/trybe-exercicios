import Quadra from "./Quadra";
import { Agenda } from "./interfaces/Agenda";

export default class QuadraFutebol extends Quadra {
  reservar<Futebol>(data: Date): Agenda<Futebol> {
    return {
      // protocolo é o "id" da reserva, gere de forma aleatória
      protocolo: 'q39tgorea9',
      data: new Date(),
      regras: { chuteira: 'cravo' } as Futebol
    }
  }
}