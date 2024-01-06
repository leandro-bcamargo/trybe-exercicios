import { Character } from "./Character";

export class MeleeCharacter extends Character {
  talk(): string {
    return `${this.name} talks!`;
  }
  
  specialMove(): string {
    return `${this.name} does a melee attack!`
  }
}