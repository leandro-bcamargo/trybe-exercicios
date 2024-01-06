import { Character, DBCharacter } from "./Character";
import { Model } from "./Model";

const mockedDB = [
  {
    id: 1,
    name: 'Wolverine',
    specialMove: 'Adamantium Claws',
  },
  {
    id: 2,
    name: 'Cyclop',
    specialMove: 'Red beam',
  },
  {
    id: 3,
    name: 'Gambit',
    specialMove: 'Magic cards',
  }
];

export class mockedDBModel implements Model {
  getAll(): DBCharacter[] {
    return mockedDB
  }

  getById(id: number): DBCharacter {
    return mockedDB[1];
  }

  create(character: Character): DBCharacter {
    return mockedDB[1];
  }

  delete(id: number): void {
    return;
  }

  update(id: number, character: Character): DBCharacter {
    return mockedDB[1];
  }
}