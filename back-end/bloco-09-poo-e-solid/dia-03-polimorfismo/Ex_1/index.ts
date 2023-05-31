import Character from "./Character"
import LongRangeCharacter from "./LongRangeCharacter";
import MeleeCharacter from "./MeleeCharacter";

const warrior = new MeleeCharacter();
const archer = new LongRangeCharacter();

const introduce = (character: Character): string  => {
  return `Character says ${character.talk()} and uses special move ${character.specialMove()}`;
}

console.log(introduce(warrior));
console.log(introduce(archer));