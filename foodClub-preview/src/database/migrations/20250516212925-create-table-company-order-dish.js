const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('company_order_dish', {
      company_order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'company_order',
          key: 'id',
        },
      },
      dish_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'dish',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('company_order_dish');
  },
};