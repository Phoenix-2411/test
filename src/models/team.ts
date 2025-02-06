import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Team extends Model {
  public id!: number;
  public name!: string;
  public inspectionTypeId!: number;
  public description!: string;
  public inspectionTypeCode!: string;
  public claimType!: string;
  public schedulable!: boolean;
  public inspectionTypeName!: string;

  static associate(models: any) {
    Team.hasMany(models.TeamUser, {
      foreignKey: 'teamId',
      as: 'teamUsers',
    });
  }
}

Team.init({
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
}, {
  sequelize,
  modelName: 'Team',
  schema: 'userservice',
  tableName: 'team',
  timestamps: true, // Auto-manages createdAt and updatedAt
});

export default Team;
