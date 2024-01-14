export interface getCepAPI {
  getCepByAddress(address: string, number: number): Promise<string>;
}

export interface getAddressAPI {
  getAddressByCEP(cep: string, number: number): Promise<string>;
}

export interface getAPI extends getCepAPI, getAddressAPI {};