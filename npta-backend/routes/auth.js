const express = require('express');
const router = express.Router();
const { pgConnection } = require('../config/pg.connection');
const { v4: uuidv4 } = require('uuid');

router.post('/register', async (req, res, next) => {
    try {
        let { email, pwd } = req.body
        if (!email || !pwd) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        let checkEmailQuery = `SELECT 1 FROM players WHERE email = $1`;
        let { rowCount } = await pgConnection.query(checkEmailQuery, [email]);

        if (rowCount > 0) {
            return res.status(400).json({ error: "Email is already registered" });
        }
        else {
            let username = email.split('@')[0];
            let player_id = uuidv4(); // Generate a UUID
            query = `INSERT INTO players (username, email, password, player_id) VALUES($1, $2, $3, $4)`
            let result = await pgConnection.query(query, [username, email, pwd, player_id])
            if (result.rowCount === 0) {
                throw new Error("Failed to insert players data")
            }
            else {
                return res.json({ message: "success" })
            }
        }

    }
    catch (err) {
        // next(err)
        console.log(err)
    }
});

router.post('/login', async (req, res, next) => {
    try {
        let { email, pwd } = req.body
        if (!email || !pwd) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        let checkQuery = `SELECT email, password FROM players WHERE email = $1`;
        let result = await pgConnection.query(checkQuery, [email]);

        if (result.rowCount === 0) {
            return res.status(400).json({ error: "Invalid Email" });
        }
        else if (result.rows[0].password !== pwd) {
            return res.status(400).json({ error: "Wrong Password" });
        }

        else {
            let timeQuery = `UPDATE players SET last_viewed = NOW() WHERE email = $1`
            let {rowCount} = await pgConnection.query(timeQuery, [email])
            if (rowCount === 0) {
                return res.status(400).json({error: "Failed to update last_viewed"})
            }
            else {
            return res.json({ message: "success" })
            }
        }
    }
    catch (err) {
        // next(err)
        console.log(err)
    }
});

module.exports = router