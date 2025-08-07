import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import pool from '../db.js';

const router = express.Router();

// Token blacklist
const tokenBlacklist = new Set();

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            return res.status(401).json({ msg: 'No token, authorization denied' });
        }

        if (tokenBlacklist.has(token)) {
            return res.status(401).json({ msg: 'Token revoked. Please log in again.' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await pool.query(
            'SELECT * FROM users WHERE id = $1',
            [decoded.userId]
        );

        if (user.rows.length === 0) {
            return res.status(401).json({ msg: 'User no longer exists' });
        }

        req.user = user.rows[0];
        req.token = token;
        next();
    } catch (err) {
        console.error('Authentication error:', err.message);
        
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ msg: 'Token expired' });
        }
        
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

router.post('/register', async (req, res) => {
    const { full_name, email_address, password } = req.body;

    if (!full_name || !email_address || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        // Check if user already exists
        const userExists = await pool.query(
            `SELECT * FROM users WHERE email_address = $1`,
            [email_address]
        );

        if (userExists.rows.length > 0) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await pool.query(
            `INSERT INTO users 
                (full_name, email_address, password) 
            VALUES ($1, $2, $3) 
            RETURNING *`,
            [full_name, email_address, hashedPassword]
        );

        const token = jwt.sign(
            { userId: newUser.rows[0].id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION || '1h' }
        );

        // Set token in Authorization header
        res.setHeader('Authorization', `Bearer ${token}`);

        res.status(201).json({
            user: {
                id: newUser.rows[0].id,
                name: newUser.rows[0].full_name,
                email: newUser.rows[0].email_address
            },
            token
        });
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/login', async (req, res) => {
    const { email_address, password } = req.body;

    if (!email_address || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        const user = await pool.query(
            `SELECT * FROM users WHERE email_address = $1`,
            [email_address]
        );

        if (user.rows.length === 0) {
            return res.status(400).json({ msg: "User doesn't exist" });
        }

        const isMatch = await bcrypt.compare(password, user.rows[0].password);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { userId: user.rows[0].id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION || '1h' }
        );

        // Set token in Authorization header
        console.log(token)
        res.setHeader('Authorization', `Bearer ${token}`);

        res.status(200).json({
            msg: 'Login successful',
            user: {
                id: user.rows[0].id,
                name: user.rows[0].full_name,
                email: user.rows[0].email_address
            },
            token
        });
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Logout endpoint
router.post('/logout', authMiddleware, (req, res) => {
    try {
        // Add the current token to the blacklist
        tokenBlacklist.add(req.token);
        
        res.status(200).json({ msg: 'Logout successful' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

export default router;