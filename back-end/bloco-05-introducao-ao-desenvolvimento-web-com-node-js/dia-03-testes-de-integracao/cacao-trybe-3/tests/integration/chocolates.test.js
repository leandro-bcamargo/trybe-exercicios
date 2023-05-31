// tests/integration/chocolates.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
const sinon = require('sinon');
const fs = require('fs');

const { expect } = chai;

// chai-http vai criar seu próprio listen(), escolher uma porta automaticamente, fazer a requisição ao endpoint e, por último, retornar o resultado dessa requisição.
chai.use(chaiHttp);

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
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
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

describe('Testando a API Cacao Trybe', function () {
  beforeEach(function () {
    // sinon.stub(módulo, função).resolves(retorno-esperado pela função)
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
    
    sinon.stub(fs.promises, 'writeFile')
      .resolves();
  });

  afterEach(function () {
    sinon.restore();
  });
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

  describe('Testando GET /chocolates/total', function() {
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

  describe('Testando GET /chocolates/search', function() {
    it('Retorna o chocolate informado', async function() {
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
      ])
    })

    it('Retorna um array vazio quando não há chocolate com esse nome', async function() {
      const response = await chai
      .request(app)
      .get('/chocolates/search?name=ZZZ');


      expect(response.status).to.equal(404);
      expect(response.body).to.deep.equal([]);
    })
  })

  describe('Testando endpoint PUT /chocolates/:id', function() {
    it('Testando se o chocolate é atualizado', async function() {
      const response = await chai
      .request(app)
      .put('/chocolates/1')
      .send({ 
        "name": "Mint Pretty Good",
        "brandId": 2
      });

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal({
        "chocolate": { 
          "id": 1,
          "name": "Mint Pretty Good",
          "brandId": 2
        }
      })
    })

    it('Testando caso de id não ser encontrado', async () => {
      const response = await chai
      .request(app)
      .put('/chocolates/555')
      .send({ 
        "name": "Mint Pretty Good",
        "brandId": 2
      })

      expect(response.status).to.equal(404);
      expect(response.body).to.deep.equal({ 
        "message": "chocolate not found"
      });
    })
  })
});