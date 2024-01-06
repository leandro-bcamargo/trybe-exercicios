import { Character } from "./Character";

export class LongRangeCharacter extends Character {
  talk(): string {
    return `${this.name} talks!`;
  }
  
  specialMove(): string {
    return `${this.name} does a ranged attack!`
  }
}