import path from "path";
import { Character, DBCharacter } from "./Character";
import { Model } from "./Model";
import * as fs from 'fs';

export class LocalDBModel implements Model {
  public db: DBCharacter[];

  constructor() {
    this.db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.ts')).toString());
  }
  async create(character: Character): Promise<DBCharacter> {
    const lastId = this.db.length > 0 ? this.db[this.db.length - 1].id : 0;
    const newCharacter = {id: lastId + 1, ...character};
    this.db.push(newCharacter);

    fs.writeFileSync(path.resolve(__dirname, 'db.ts'), JSON.stringify(this.db));
    return newCharacter;
  }

  async delete(id: number): Promise<boolean> {
    const indexToDelete = this.db.findIndex(char => char.id === id);
    if (indexToDelete === -1) throw new Error ('No character with such id found')
    const deletedChar = this.db.splice(indexToDelete, 1);

    fs.writeFileSync(path.resolve(__dirname, 'db.ts'), JSON.stringify(this.db))
    return deletedChar.length > 0;
  }

  async getAll(): Promise<DBCharacter[]> {
    return this.db;
  }

  async getById(id: number): Promise<DBCharacter> {
    const char = this.db.find(char => char.id === id);
    if (!char) throw new Error('No character with such id found');
    return char;
  }

  async update({id, character}: {id: number, character: Character}): Promise<DBCharacter> {
    const indexToUpdate = this.db.findIndex(char => char.id === id);
    if (!indexToUpdate) throw new Error('No character with such id found')
    const updatedChar = {id, ...character};
    this.db.splice(indexToUpdate, 1, updatedChar);

    fs.writeFileSync(path.resolve(__dirname, 'db.ts'), JSON.stringify(this.db));
    return updatedChar;
  }
}