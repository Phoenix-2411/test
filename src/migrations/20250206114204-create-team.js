'use strict';
/** @type {import('sequelize-cli').Migration} */

const { DataTypes } = require('sequelize');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('team', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      inspectionTypeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      inspectionTypeCode: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      claimType: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      schedulable: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      inspectionTypeName: {
        type: DataTypes.STRING(255),
        allowNull: true,
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
      schema: 'userservice',
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({
      tableName: 'team',
      schema: 'userservice',
    });
  }
};