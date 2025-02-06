import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Attachment extends Model {
  public id!: number;
  public userId!: number;
  public type!: string;
  public mimeType!: string;
  public title!: string;
  public description!: string;
  public active!: boolean;
  public deleted!: boolean;
  public createdBy!: string;
  public updatedBy!: string;

  static associate(models: any) {
    // One attachment belongs to one user
    Attachment.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  }
}

Attachment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    mimeType: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    updatedBy: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Attachment',
    schema: 'userservice',
    tableName: 'attachments',
    timestamps: true,
  }
);

export default Attachment;
