// tests/integration/chocolates.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
const sinon = require('sinon');
const fs = require('fs').promises;
const { expect } = chai;

// chai-http vai criar seu próprio listen(), escolher uma porta automaticamente, fazer a requisição ao endpoint e, por último, retornar o resultado dessa requisição.
chai.use(chaiHttp);

describe('Testando a API Cacao Trybe', function () {
  const mockCacaoTrybe = {
    "brands": [
        {
            "id": 1,
            "name": "Lindt & Sprungli"
        },
        {
            "id": 2,
            "name": "Ferrero"
        },
        {
            "id": 3,
            "name": "Ghirardelli"
        }
    ],
    "chocolates": [
        {
            "id": 1,
            "name": "Mint Intense",
            "brandId": 1
        },
        {
            "id": 2,
            "name": "White Coconut",
            "brandId": 1
        },
        {
            "id": 3,
            "name": "Mon Chéri",
            "brandId": 2
        },
        {
            "id": 4,
            "name": "Mounds",
            "brandId": 3
        }
    ]
  }
  beforeEach(() => {
    sinon.restore();
    sinon.stub(fs, 'readFile').resolves(JSON.stringify(mockCacaoTrybe));
  })

  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
			// Idêntico à chocolates do arquivo cacaoTrybeFile.json.
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const response = await chai
      // Informa que queremos fazer uma requisição e passa por parâmetro o módulo onde serão encontrados os endpoints para realizar essa requisição.
        .request(app)
        .get('/chocolates');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
			// res.status(200).json({ chocolate });
      expect(response.body.chocolate).to.deep.equal([
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        }]);
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
			// res.status(200).json({ chocolates });
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });

  describe('Usando o método GET em /chocolates/total para buscar todos os chocolates', () => {
    it('Retorna a quantidade total de chocolates', async function() {
      const response = await chai
      .request(app)
      .get('/chocolates/total');

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal({
        "totalChocolates": 4 // quantidade de chocolates na base de dados
      })
    })
  })

  describe('Usando o método GET em /chocolates/search para buscar chocolates', () => {
    it('Pesquisa pelo nome "Mo"', async function() {
      const response = await chai
      .request(app)
      .get('/chocolates/search?name=Mo');

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal([
        {
          "id": 3,
          "name": "Mon Chéri",
          "brandId": 2
        },
        {
          "id": 4,
          "name": "Mounds",
          "brandId": 3
        }
      ]);
    })

    it('Pesquisa pelo nome "ZZZ"', async function() {
      const response = await chai
      .request(app)
      .get('/chocolates/search?name=ZZZ');

      expect(response.status).to.equal(404);
      expect(response.body).to.deep.equal([]);
    })
  })
});