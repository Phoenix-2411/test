import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database'; // Import sequelize instance
import User from './models/user'; // Import User model

dotenv.config();
const app = express();
app.use(express.json()); // Middleware to parse JSON

// Create a user
app.post('/create-user', async (req: Request, res: Response) => {
    try {
        const { clientId, isActive, isFirstLogin, isSSOEnabled, type, description, clientSpecific, roleId, profileId, clientCode, isDeleted } = req.body;

        const user = await User.create({
            clientId,
            isActive,
            isFirstLogin,
            isSSOEnabled,
            type,
            description,
            clientSpecific,
            roleId,
            profileId,
            clientCode,
            isDeleted,
        });

        res.status(201).json(user);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
});

// Fetch all users
app.get('/users', async (_req: Request, res: Response) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
