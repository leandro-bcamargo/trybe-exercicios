import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";

const clube = new Clube();
const quadra = new QuadraFutebol();
clube.adicionarQuadra(quadra);
console.log(quadra.reservar(new Date()));