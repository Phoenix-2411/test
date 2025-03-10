'use strict';
const { DataTypes } = require('sequelize');
const { AutoIncrement } = require('sequelize-typescript');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {  // Table name is 'user'
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        AutoIncrement: true,
      },
      clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isFirstLogin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isSSOEnabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      clientSpecific: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      profileId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      clientCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'),
      },
    }, {
      schema: 'userservice',  // Specify the schema 'userservice'
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable({
      tableName: 'user',
      schema: 'userservice',
    });
  }

};
