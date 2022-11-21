const {expect} = require('chai');

const {readMissionsData} = require('../../src/utils/fsUtils.js')

describe('A função readMissionsData', function() {
  it('retorna um array', async function() {
    const missions = await readMissionsData();

    expect(missions).to.be.instanceof(Array);
  })
});

