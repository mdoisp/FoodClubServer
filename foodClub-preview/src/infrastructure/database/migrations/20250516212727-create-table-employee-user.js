const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('employee_user', {
      employee_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'employee',
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
    await queryInterface.dropTable('employee_user');
  },
};