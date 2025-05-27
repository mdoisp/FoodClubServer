const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('user_log', {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'user',
          key: 'id',
        },
      },
      log_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'log',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('user_log');
  },
};