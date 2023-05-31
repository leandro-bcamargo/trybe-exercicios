'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('books', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      author: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      pageQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  /* id: deve ser do tipo integer, não pode ser nula e ser a chave primária da tabela com auto incremento;
title: deve ser do tipo string e não pode ser nulo;
author: deve ser do tipo string e não pode ser nulo;
pageQuantity: deve ser do tipo integer e pode ser nulo;
createdAt: deve ser do tipo date e não pode ser nulo;
updatedAt: deve ser do tipo date e não pode ser nulo;*/

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('books');
  }
};
