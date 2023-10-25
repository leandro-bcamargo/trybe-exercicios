'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users_Books', [{ user_id: 1, book_id: 1 },
    { user_id: 1, book_id: 3 },
    { user_id: 2, book_id: 1 },
    { user_id: 2, book_id: 2 },
    { user_id: 3, book_id: 1 },
    { user_id: 3, book_id: 2 },
    { user_id: 3, book_id: 3 },], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users_Books', null, {});
  }
};
