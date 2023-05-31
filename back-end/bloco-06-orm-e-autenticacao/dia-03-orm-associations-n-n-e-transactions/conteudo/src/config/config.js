// require('dotenv/config');

const config = {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    port: process.env.MYSQL_PORT,
  };

module.exports = {
  development: {
    ...config,
    database: 'books_database_development',
  },

  tests: {
    ...config,
    database: 'books_database_test',
  },

  production: {
    ...config,
    database: 'books_database_production',
  }
}
