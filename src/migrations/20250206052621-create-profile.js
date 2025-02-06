'use strict';
const { DataTypes } = require('sequelize');
const { AutoIncrement } = require('sequelize-typescript');



module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('profile', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      externalId: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(50),
      },
      middleName: {
        type: DataTypes.STRING(50),
      },
      workEmail: {
        type: DataTypes.STRING(100),
        validate: { isEmail: true },
      },
      workPhone: {
        type: DataTypes.STRING(20),
      },
      personalPhone: {
        type: DataTypes.STRING(20),
      },
      personalEmail: {
        type: DataTypes.STRING(100),
        validate: { isEmail: true },
      },
      fax: {
        type: DataTypes.STRING(50),
      },
      gender: {
        type: DataTypes.STRING(10),
      },
      isPerson: {
        type: DataTypes.BOOLEAN,
      },
      workAddress: {
        type: DataTypes.STRING(255),
      },
      profilePicture: {
        type: DataTypes.STRING(255),
      },
    },
      {
        schema: 'userservice',
      });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable({
      tableName: 'profile',
      schema: 'userservice',
    });
  }
};