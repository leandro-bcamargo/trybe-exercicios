// src/services/validations/validations-exercises.js
const { carModel } = require('../../models');
const { addCarSchema, addDriverSchema } = require('./schemas-exercises');

const validateNewCar = (model, color, licensePlate) => {
  const { error } = addCarSchema
    .validate({ model, color, licensePlate });
 
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  return { type: null, message: '' };
};

const validateNewDriver = async (name, carIds) => {
  const { error } = addDriverSchema
    .validate({ name, carIds });
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  if (carIds) {
    // chamamos `carModel.findById` em cada um dos ids para buscar os carros na DB
    // quando um carro não existe, sua Promise retorna `undefined`
    // `Promise.all` aguarda todas as Promises retornarem
    // e retorna a array de resultados para `cars`
    const cars = await Promise.all(
      carIds.map(async (carId) => carModel.findById(carId)),
    );

    const someCarIsMissing = cars.some((car) => car === undefined);
    if (someCarIsMissing) return { type: 'CAR_NOT_FOUND', message: 'Some car is not found' };
  }

  return { type: null, message: '' };
};

module.exports = {
  validateNewCar,
  validateNewDriver,
};