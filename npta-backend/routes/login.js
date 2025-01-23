const express = require('express');
const { pgConnection } = require('../config/pg.connection');
const router = express.Router();
//http://localhost:8000/example
router.post('/example', async (req, res, next) => {
    try{
        let {email, password} = req.body
        if(email && password) {
            query = `INSERT INTO players (username, email) VALUES(1, ${email})`
            let answ = await pgConnection.query(query)
        }
        res.json({"message":"sucussfully stored"})
    }
    catch(err){
        // next(err)
        console.log(err)
    }
})