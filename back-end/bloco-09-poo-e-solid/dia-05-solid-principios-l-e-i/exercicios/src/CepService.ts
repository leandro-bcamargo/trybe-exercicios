// ./CepService.ts
import { getAPI } from './CepAPI';
import FooCepAPI from './FooCepAPI';

class CepService {
  private readonly cepApi: getAPI;

  constructor(cepAPI: getAPI) {
    this.cepApi = cepAPI;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;