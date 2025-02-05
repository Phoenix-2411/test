import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Initialize Sequelize with PostgreSQL settings
const sequelize = new Sequelize(
    process.env.DB_NAME as string,     // Database name
    process.env.DB_USER as string,     // Database username
    process.env.DB_PASS as string,     // Database password
    {
        host: '127.0.0.1',             // Database host (localhost)
        dialect: 'postgres',           // Dialect: PostgreSQL
        logging: false,                // Disable SQL logging (optional)
    }
);

// Test the connection to the database
sequelize
    .authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

export default sequelize;
