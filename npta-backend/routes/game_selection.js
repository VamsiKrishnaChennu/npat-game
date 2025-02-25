const express = require("express");
const router = express.Router() 
const { pgConnection } = require('../config/pg.connection');

router.post( "/start", async (rreq, res, next) => {
    try {}
    catch(err) {
        console.log(err)
    }
})

module.exports = router