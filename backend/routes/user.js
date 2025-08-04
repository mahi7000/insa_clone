import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import pool from '../db.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    const { full_name, email_address, password } = req.body;

    if (!full_name || !email_address || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await pool.query(
        `INSERT INTO users 
            (full_name, email_address, password) 
        VALUES ($1, $2, $3) 
        RETURNING *`,
        [full_name, email_address, hashedPassword]
        );

        const payload = await pool.query(
        `SELECT id FROM users WHERE email_address = $1`,
        [email_address]
        );

        const token = jwt.sign({ userId: payload.rows[0].id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRATION
        });

        console.log('Generated token: ', token);

        res.status(201).json(newUser.rows[0]);
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
            return res.status(400).json({ msg: 'User does not exist' });
        }
        const isMatch = await bcrypt.compare(password, user.rows[0].password);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user.rows[0].id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRATION
        });

        console.log('Generated token: ', token);

        res.status(200).json({ msg: 'Login successful', user: user.rows[0] });
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

export default router;