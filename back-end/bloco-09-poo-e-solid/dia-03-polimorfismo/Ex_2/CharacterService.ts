import { Character } from "./Character";
import IModel from "./IModel";
import LocalDbModel from "./LocalDbModel";

export default class CharacterService {
  constructor(private model: IModel) {}

  create = async (character: Character) => {
    const newCharacter = await this.model.create(character);
    return {status: 201, data: newCharacter};
  }

  getAll = async() => {
    const allChars = await this.model.getAll();
    return {status: 200, data: allChars};
  }

  findById = async (id: number) => {
    const character = await this.model.getById(id);
    return {status: 200, data: character};
  }

  update = async (id: number, character: Character) => {
    const updatedChar = await this.update(id, character);
    return {status: 200, data: updatedChar};
  }

  delete = async (id: number) => {
    const wasDeleted = await this.model.delete(id);
    return {status: 200, data: wasDeleted};
  }
}