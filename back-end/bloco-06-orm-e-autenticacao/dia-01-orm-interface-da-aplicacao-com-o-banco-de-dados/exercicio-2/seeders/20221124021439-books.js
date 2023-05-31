'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('books',  [{
      title: 'Christine',
      author: 'Stephen King',
      pageQuantity: 616,
      updatedAt: Sequelize.literal('CURRENT_DATE'),
      createdAt: Sequelize.literal('CURRENT_DATE'),
    },
    {
      title: 'Apanhador de Sonhos',
      author: 'Stephen King',
      pageQuantity: 656,
      createdAt: Sequelize.literal('CURRENT_DATE'),
      updatedAt: Sequelize.literal('CURRENT_DATE'),
    },
    {
      title: 'A Dança da Morte',
      author: 'Stephen King',
      pageQuantity: '1248',
      createdAt: Sequelize.literal('CURRENT_DATE'),
      updatedAt: Sequelize.literal('CURRENT_DATE'),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('books', null, {});
  }
};
