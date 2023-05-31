import { Character, DbCharacter, db } from "./Character";
import IModel from "./IModel";

export default class LocalDbModel implements IModel {
  create = async (character: Character): Promise<DbCharacter> => {
    const lastId: number = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter = {id: lastId + 1, ...character};
    db.push(newCharacter);
    return newCharacter;
  }

  findIndexById = (id: number): number => {
    const index = db.findIndex(char => char.id === id);
    if (index === -1) throw new Error('Character not found');
    return index;
  }

  update = async (id: number, character: Character): Promise<DbCharacter> => {
    const indexToUpdate = this.findIndexById(id);
    db[indexToUpdate] = {...db[indexToUpdate], ...character};
    return db[indexToUpdate];
  }

  delete = async (id: number): Promise<boolean> => {
    const indexToDelete = this.findIndexById(id);
    const deletedItem = db.splice(indexToDelete, 1);
    if (deletedItem.length === 1) return true;
    return false;
  }

  getAll = async () => db;

  getById = async (id: number): Promise<DbCharacter> => {
    const foundEl = db.find(char => char.id === id);
    if (!foundEl) throw new Error('Element not found');
    return foundEl;
  }
}