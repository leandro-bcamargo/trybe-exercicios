import { Character } from "../Models/Character";
import { LocalDBModel } from "../Models/LocalDBModel";
import { CharacterService } from "../Services/CharacterService";

export class CharacterController {
  private _service: CharacterService;
  constructor(service: CharacterService) {
    this._service = service;
  }
  public get service(): CharacterService {
    return this._service;
  }
  public set service(value: CharacterService) {
    this._service = value;
  }
  
  async getAll() {
    try {
      const {status, data} = await this.service.getAll();
      console.log(`status: ${status}, data: ${JSON.stringify(data)}`);
    } catch (error) {
      if (error instanceof Error) console.log(`status: ${401}, data: ${JSON.stringify({message: error.message})}`);
    }
  }

  async getById(id: number) {
    try {
      const {status, data} = await this.service.getById(id);
      console.log(`status: ${status}, data: ${JSON.stringify(data)}`);
    } catch (error) {
      if (error instanceof Error) console.log(`status: ${401}, data: ${JSON.stringify({message: error.message})}`);
    }
  }

  async create(character: Character) {
    try {
      const {status, data} = await this.service.create(character);
      console.log(`status: ${status}, data: ${JSON.stringify(data)}`);
    } catch (error) {
      if (error instanceof Error) console.log(`status: ${401}, data: ${JSON.stringify({message: error.message})}`);
    }
  }

  async delete(id: number) {
    try {
      const {status, data} = await this.service.delete(id);
      console.log(`status: ${status}, data: ${JSON.stringify(data)}`);
    } catch (error) {
      if (error instanceof Error) console.log(`status: ${401}, data: ${JSON.stringify({message: error.message})}`);
    }
  }

  async update(id: number, character: Character) {
    try {
      const {status, data} = await this.service.update({id, character});
      console.log(`status: ${status}, data: ${JSON.stringify(data)}`);
    } catch (error) {
      if (error instanceof Error) console.log(`status: ${401}, data: ${JSON.stringify({message: error.message})}`);
    }
  }
}

const charModel = new LocalDBModel();
const charService = new CharacterService(charModel);
const charController = new CharacterController(charService);

charController.getAll();
// charController.getById(3);
// charController.create({name: 'Beast', specialMove: 'Use intellect'})
// charController.delete(4);
// charController.update(4, {name: 'Beast', specialMove: 'Put glasses on'})
