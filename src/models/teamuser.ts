import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
class TeamUser extends Model {
  public id!: number;
  public teamId!: number;
  public userId!: number;
  public roleId!: number;
  public isActive!: boolean;
  static associate(models: any) {

    TeamUser.belongsTo(models.Team, { foreignKey: 'teamId', as: 'team' });
    TeamUser.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    TeamUser.belongsTo(models.Role, { foreignKey: 'roleId', as: 'role' });
  }
}
TeamUser.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  teamId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
},
  {
    sequelize,
    modelName: 'TeamUser',
    schema: 'userservice',
    tableName: 'teamUser',
    timestamps: true,
  });

export default TeamUser;