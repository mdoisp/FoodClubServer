const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('restaurant_dish', {
      restaurant_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'restaurant',
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
    await queryInterface.dropTable('restaurant_dish');
  },
};