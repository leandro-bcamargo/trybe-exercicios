import Character from "./Character";

export default class MeleeCharacter extends Character {
  talk(): string {
    return "Hello, I'm a melee character."
  };

  specialMove(): string {
    return 'Melee attack.'
  }
}