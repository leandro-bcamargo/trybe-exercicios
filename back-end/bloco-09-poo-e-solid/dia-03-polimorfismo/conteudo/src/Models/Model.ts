import { Character, DBCharacter } from "./Character";

export interface Model {
  getAll(): Promise<DBCharacter[]>;
  getById(id: number): Promise<DBCharacter>;
  create(character: Character): Promise<DBCharacter>;
  delete(id: number): Promise<boolean>;
  update({id, character}: {id: number, character: Character}): Promise<DBCharacter>;
}