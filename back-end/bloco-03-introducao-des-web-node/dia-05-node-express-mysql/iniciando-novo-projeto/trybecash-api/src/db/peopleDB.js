const connection = require("./connection");

async function insert(person) {
  const result = await connection.execute(
    `
    INSERT INTO people (first_name, last_name, email, phone)
    VALUES (?, ?, ?, ?)
    `,
    [person.firstName, person.lastName, person.email, person.phone]
  );

  return result;
}

async function findAll() {
  const result = await connection.execute(`
  SELECT * FROM people
  `);

  return result;
}

async function findById(id) {
  const result = await connection.execute(
    `
    SELECT * FROM people
    WHERE id = ?
  `,
    [id]
  );

  return result;
}

async function update(id, { firstName, lastName, email, phone }) {
  const result = await connection.execute(
    `
  UPDATE people
  SET first_name=?, last_name=?, email=?, phone=?
  WHERE id = ?
  `,
    [firstName, lastName, email, phone, id]
  );

  console.log("update result", result);
  return result;
}

async function remove(id) {
  const result = await connection.execute(
    `
  DELETE FROM people
  WHERE id = ?
  `,
    [id]
  );

  console.log("delete result", result);
  return result;
}

module.exports = {
  insert,
  findAll,
  findById,
  update,
  remove,
};
