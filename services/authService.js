const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');

const authService = {
    registerUser: async (id, password) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const query = 'INSERT INTO users (id, password) VALUES (?, ?)';
            await db.query(query, [id, hashedPassword]);
            return true;
        } catch (error) {
            console.error('Error registering user:', error);
            throw error;
        }
    },
    authenticateUser: async (id, password) => {
        try {
            const query = 'SELECT password FROM users WHERE id = ?';
            const result = await db.query(query, [id]);
            const user = result[0];

            if (!user) {
                return null;
            }

            const isPasswordMatch = await bcrypt.compare(
                password,
                user.password
            );
            if (!isPasswordMatch) {
                return null;
            }

            const accessToken = jwt.sign({ id }, 'secret_key', {
                expiresIn: '10m',
            });
            const refreshToken = jwt.sign({ id }, 'refresh_secret_key');
            return { accessToken, refreshToken };
        } catch (error) {
            console.error('Error authenticating user:', error);
            throw error;
        }
    },
    refreshAccessToken: async (refreshToken) => {
        try {
            const decoded = jwt.verify(refreshToken, 'refresh_secret_key');

            const accessToken = jwt.sign({ id: decoded.id }, 'secret_key', {
                expiresIn: '10m',
            });

            return accessToken;
        } catch (error) {
            console.error('Error refreshing access token:', error);
            throw error;
        }
    },
};

module.exports = authService;
