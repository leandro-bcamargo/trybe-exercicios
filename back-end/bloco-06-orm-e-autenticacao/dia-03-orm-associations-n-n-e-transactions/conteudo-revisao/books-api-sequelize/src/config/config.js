require('dotenv').config();

const dev = {
  "username": process.env.MYSQL_USER,
  "password": process.env.MYSQL_PASSWORD,
  "database": process.env.MYSQL_DATABASE_DEV,
  "host": process.env.MYSQL_HOST,
  "dialect": "mysql"
};

const prod = {
  ...dev,
  "database": process.env.MYSQL_DATABASE_PROD,
}

const test = {
  ...dev,
  "database": process.env.MYSQL_DATABASE_TEST,
}



module.exports = {
  production: prod,
  test,
  development: dev,
}