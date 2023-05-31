const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const result = await connection.execute(
  'SELECT * FROM drivers',
  );
  return result;
};

const findById = async (driverId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM drivers WHERE id = ?',
    [driverId],
  );
  return camelize(result);
};

const insert = async (driver) => {
  const [{ insertId }] = await connection.execute(
  'INSERT INTO drivers (name) VALUE (?)',
  [driver.name],
  );

  return insertId;
};

module.exports = {
  findById,
  findAll,
  insert,
};