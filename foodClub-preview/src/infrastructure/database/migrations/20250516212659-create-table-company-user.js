const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('company_user', {
      company_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'company',
          key: 'id',
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'user',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('company_user');
  },
};