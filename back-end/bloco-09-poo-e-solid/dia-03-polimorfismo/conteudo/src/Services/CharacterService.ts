import { Character } from '../Models/Character';
import { Model } from './../Models/Model';

export class CharacterService {
  private _model: Model;
  
  constructor(model: Model) {
    this._model = model;
  }

  public get model(): Model {
    return this._model;
  }

  public set model(value: Model) {
    this._model = value;
  }

  async getAll() {
    const characters = await this.model.getAll();
    return {status: 200, data: characters}
  }

  async getById(id: number) {
      const character = await this.model.getById(id);
      return {status: 200, data: character};
  }

  async create(character: Character) {
    const createdCharacter = await this.model.create(character);
    return {status: 200, data: createdCharacter}
  }

  async delete(id: number) {
    const isDeleted = await this.model.delete(id);
    return {status: 204, data: {message: 'Successfully deleted'}}

  }

  async update({id, character}: {id: number, character: Character}) {
    const updatedCharacter = await this.model.update({id, character});
    return {status: 204, data: updatedCharacter}
  }
}