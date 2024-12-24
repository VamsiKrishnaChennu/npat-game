const { Client } = require("pg");
const { PG_USER: user, PG_NAME: database, PG_HOST: host, PG_PASS: password, PG_PORT: port, NODE_ENV: node_env } = process.env;

let connection = {
  user, database, host, password, port
};

// create a new connection to the database
let pgConnection = new Client(connection);

// connect to the database
pgConnection.connect()
  .then(() => { require("../model/index") })
  .catch((err) => { console.error("Connection error details:", err); });

module.exports = { pgConnection };