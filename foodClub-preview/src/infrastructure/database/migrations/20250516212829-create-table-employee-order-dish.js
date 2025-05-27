const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('employee_order_dish', {
      employee_order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'employee_order',
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
    await queryInterface.dropTable('employee_order_dish');
  },
};