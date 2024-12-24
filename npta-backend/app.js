const dotenv = require('dotenv');
dotenv.config();
const {PORT} = process.env;

const express = require('express');
const app = express();
// const cors = require('cors');

require('./config/pg.connection')

const http = require('http').Server(app);
app.use(express.json());
// app.use(cors());
//server
http.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});

