export interface Character {
  name: string;
  specialMove: string;
}

export interface DBCharacter extends Character {
  id: number;
}