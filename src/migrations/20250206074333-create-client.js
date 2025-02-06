const { DataTypes } = require('sequelize');
const { AutoIncrement } = require('sequelize-typescript');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('client', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      configs: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
    }, {
      schema: 'userservice',
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable({
      tableName: 'client',
      schema: 'userservice',
    });
  }
};