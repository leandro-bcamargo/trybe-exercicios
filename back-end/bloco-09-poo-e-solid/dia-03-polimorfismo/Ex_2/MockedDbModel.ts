import { Character } from "./Character"

export default class mockedDbModel implements IModel {
  create = async (character: Character) => {
    console.log('character created');
    return {...character};
  }
}

// export default interface IModel {
//   create: (character: Character) => Promise<DbCharacter>;
//   update: (id: number, character: Character) => Promise<DbCharacter>;
//   delete: (id: number) => Promise<boolean>;
//   getAll: () => Promise<DbCharacter[]>;
//   getById: (id: number) => Promise<DbCharacter>;
// }