const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('restaurant', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      restaurant_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      cnpj: {
        type: DataTypes.STRING(20),
        unique: true,
      },
      street: {
        type: DataTypes.STRING(100),
      },
      number: {
        type: DataTypes.STRING(10),
      },
      zip_code: {
        type: DataTypes.STRING(10),
      },
      city: {
        type: DataTypes.STRING(50),
      },
      state: {
        type: DataTypes.STRING(2),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('restaurant');
  },
};