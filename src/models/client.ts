import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Client extends Model {
  public id!: number;
  public configs!: object;
  static associate(models: any) {
    Client.hasOne(models.User, {
      foreignKey: 'clientId',  // the key in the User table
      as: 'user',  // alias for the relationship
    });
  }
}
Client.init({
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
  sequelize,
  modelName: 'Client',
  schema: 'userservice',
  tableName: 'client',
});

export default Client;

