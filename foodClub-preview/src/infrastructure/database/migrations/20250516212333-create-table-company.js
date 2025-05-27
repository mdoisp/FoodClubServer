const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('company', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      company_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      street: {
        type: DataTypes.STRING(100),
      },
      cnpj: {
        type: DataTypes.STRING(20),
      },
      zip_code: {
        type: DataTypes.STRING(10),
      },
      number: {
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
    await queryInterface.dropTable('company');
  },
};