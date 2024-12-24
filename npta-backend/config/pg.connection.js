const { Client } = require("pg");
const { PG_USER: user, PG_NAME: database, PG_HOST: host, PG_PASS: password, PG_PORT: port, NODE_ENV: node_env } = process.env;

let connection = {
  user, database, host, password, port
};

if (node_env === 'dev') {
  connection.ssl = {
    require: true,
    rejectUnauthorized: false // Temporarily disable SSL verification   
  };
}

// create a new connection to the database
let pgConnection = new Client(connection);

// connect to the database
pgConnection.connect()
.then(() => { require("../model/index") })
  .catch((err) => { });

module.exports = { pgConnection };