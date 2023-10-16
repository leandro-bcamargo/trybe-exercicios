'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        "title": "History of Philosophy",
        "author": "AC Grayling",
        "pageQuantity": 1000,
        "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
        "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
