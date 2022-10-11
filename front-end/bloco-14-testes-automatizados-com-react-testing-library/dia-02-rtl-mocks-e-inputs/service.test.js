import { generateRandomNumber } from "./service";

it('Testando função generateRandomNumber', () => {
  const mockedGenerateRandomNumber = jest.fn(generateRandomNumber).mockReturnValue(10);

  mockedGenerateRandomNumber();
  expect(mockedGenerateRandomNumber).toHaveBeenCalled();
  expect(mockedGenerateRandomNumber()).toBe(10);
  expect(mockedGenerateRandomNumber).toHaveBeenCalledTimes(1);
})