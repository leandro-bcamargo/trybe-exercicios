import Character from "./Character";

export default class LongRangeCharacter extends Character {
  talk(): string {
    return "I'm a long range character";
  }
  specialMove(): string {
    return "Long range attack";
  }
}