'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Restaurant', [
        {
          nomeEmpresa: 'FoodClub',
          fone: '15991211221',
          email: 'foodclub@email.com'
        }
      ]);
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Restaurant', null, {});
  }
};
