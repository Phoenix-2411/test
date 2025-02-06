import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/database'; // Import the database configuration

// Define the User model
class User extends Model {
    public id!: number;
    public clientId!: number;
    public isActive!: boolean;
    public isFirstLogin!: boolean;
    public isSSOEnabled!: boolean;
    public type!: string;
    public description!: string;
    public clientSpecific!: boolean;
    public createdAt!: Date;
    public updatedAt!: Date;
    public roleId!: number;
    public profileId!: number;
    public clientCode!: string;
    public isDeleted!: boolean;

    // Static method to define associations
    static associate(models: any) {
        User.belongsTo(models.Role, { foreignKey: 'roleId', as: 'role' });
        User.belongsTo(models.Profile, { foreignKey: 'profileId', as: 'profile' });

    }
}

// Initialize the User model
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        clientId: {
            type: DataTypes.INTEGER,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
        },
        isFirstLogin: {
            type: DataTypes.BOOLEAN,
        },
        isSSOEnabled: {
            type: DataTypes.BOOLEAN,
        },
        type: {
            type: DataTypes.STRING(50),
        },
        description: {
            type: DataTypes.STRING(255),
        },
        clientSpecific: {
            type: DataTypes.BOOLEAN,
        },
        roleId: {
            type: DataTypes.INTEGER,
        },
        profileId: {
            type: DataTypes.INTEGER,
        },
        clientCode: {
            type: DataTypes.STRING(50),
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        sequelize, // Sequelize instance
        modelName: 'User',
        schema: 'userservice', // Set the schema name explicitly
        tableName: 'user', // Table name in your database
        timestamps: false, // Enable timestamps (createdAt and updatedAt)
    }
);

// Export the model to be used in other parts of the app
export default User;
