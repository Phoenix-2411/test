import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Role extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public group!: string;
  public isActive!: boolean;
  public policies!: object;

  static associate(models: any) {
    Role.hasMany(models.User, {
      foreignKey: 'roleId',  // foreign key in the User table
      as: 'users',  // alias for the relationship
    });

    // One role can have many team users (1-to-many)
    Role.hasMany(models.TeamUser, {
      foreignKey: 'roleId',  // foreign key in the TeamUser table
      as: 'teamUsers',  // alias for the relationship
    });
  }
}
Role.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  group: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  policies: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
},
  {
    sequelize,
    modelName: 'Role',
    schema: 'userservice',
    tableName: 'role',
    timestamps: true,
  });