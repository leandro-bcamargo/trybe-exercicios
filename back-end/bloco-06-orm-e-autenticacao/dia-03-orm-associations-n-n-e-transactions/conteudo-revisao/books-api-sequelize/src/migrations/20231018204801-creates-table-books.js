'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('Books', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      releaseYear: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'release_year',
      },
      totalPages: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'total_pages',
      },
    }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  }
};
