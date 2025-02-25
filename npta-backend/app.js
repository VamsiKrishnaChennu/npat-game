const dotenv = require('dotenv');
dotenv.config();
const {PORT} = process.env;

const express = require('express');
const app = express();
require('./config/pg.connection')

const http = require('http').Server(app);
app.use(express.json());

app.use(`/auth`, require('./routes/auth'));
app.use(`/game_selection`, require('./routes/game_selection'))
 
app.use((err, req, res, next) => {
    res.status(500).json({status: "error", err:err.message, message:'internal server error'})
})

//server
http.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});

