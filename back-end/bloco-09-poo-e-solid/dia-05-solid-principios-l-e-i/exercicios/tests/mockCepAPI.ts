import { getAPI } from "../src/CepAPI";

export default class mockAPI implements getAPI {
  async getCepByAddress(address: string, number: number): Promise<string> {
      return `The mock cep for: "${address}, n°:${number}" is "mock cep"`;
    }
  
    async getAddressByCEP(cep: string, number: number): Promise<string> {
      return `The mock address for "cep:${cep}, n°:${number}" is "mock address"`;
    };
}