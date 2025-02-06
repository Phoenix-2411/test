import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Profile extends Model {
  public id!: number;
  public externalId!: string;
  public name!: string;
  public firstName!: string;
  public lastName!: string;
  public middleName!: string;
  public workEmail!: string;
  public workPhone!: string;
  public personalPhone!: string;
  public personalEmail!: string;
  public fax!: string;
  public gender!: string;
  public isPerson!: boolean;
  public workAddress!: string;
  public profilePicture!: string;

  static associate(models: any) {
    // One-to-One Relationship between Profile and User
    Profile.hasOne(models.User, { foreignKey: 'profileId', as: 'user' });
  }
}

Profile.init(
  {
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
    sequelize,
    schema: 'userservice',
    modelName: 'Profile',
    tableName: 'profile',
    timestamps: false,
  }
);

export default Profile;
