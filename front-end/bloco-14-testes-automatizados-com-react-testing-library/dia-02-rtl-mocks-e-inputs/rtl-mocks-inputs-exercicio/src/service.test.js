const service = require('./service');

it('Exercicio 1', () => {
  service.generateRandomNumber = jest.fn().mockReturnValue(10);

  service.generateRandomNumber();
  expect(service.generateRandomNumber).toHaveBeenCalled();
  expect(service.generateRandomNumber()).toBe(10);
  expect(service.generateRandomNumber).toHaveBeenCalledTimes(2);
})

it('Exercicio 2', () => {
  service.generateRandomNumber = jest.fn().mockImplementationOnce((par1, par2) => par1 / par2);

  expect(service.generateRandomNumber(10, 5)).toBe(2);
  expect(service.generateRandomNumber(10 ,5)).toBe(undefined);
  expect(service.generateRandomNumber).toHaveBeenCalledTimes(2);
})

it('Exercicio 3', () => {
  service.generateRandomNumber = jest.fn().mockImplementation((par1, par2, par3) => par1 * par2 * par3);
  
  expect(service.generateRandomNumber(3, 4, 5)).toBe(60);
  expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);

  service.generateRandomNumber.mockReset();
  expect(service.generateRandomNumber(3, 4, 5)).toBe(undefined);
  service.generateRandomNumber.mockImplementation((par1) => par1 * 2);
  expect(service.generateRandomNumber(4)).toBe(8);

})

it('exercicio 4', () => {
  const mockedMakeUpperCase = jest.spyOn(service, 'makeUpperCase').mockImplementation((string) => string.toLowerCase());

  expect(mockedMakeUpperCase('TESTE')).toBe('teste');

  service.getFirstCharater = jest.fn().mockImplementation((string) => string[string.length - 1]);

  expect(service.getFirstCharater('teste')).toBe('e');

  service.concatenate = jest.fn().mockImplementation((string1, string2, string3) => string1 + string2 + string3)

  expect(service.concatenate('leandro', 'bortolotto', 'camargo')).toBe('leandrobortolottocamargo');

  service.makeUpperCase.mockRestore();
  expect(service.makeUpperCase('teste')).toBe('TESTE');
})

afterEach(() => service.fetchDog.mockReset);

it('exercicio 5', async () => {
  service.fetchDog = jest.fn();
  service.fetchDog.mockResolvedValue('request success');

  service.fetchDog();
  expect(service.fetchDog).toHaveBeenCalled();
  expect(service.fetchDog).toHaveBeenCalledTimes(1);
  await expect(service.fetchDog()).resolves.toBe('request success');
  expect(service.fetchDog).toHaveBeenCalledTimes(2);

})
it('exercicio 5.2', async () => {
  service.fetchDog.mockRejectedValue('request denied');

  expect(service.fetchDog).toHaveBeenCalledTimes(0);
  await expect(service.fetchDog()).rejects.toMatch('request denied');
  expect(service.fetchDog).toHaveBeenCalledTimes(1);






})
