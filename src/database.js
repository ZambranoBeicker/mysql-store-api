const mysql = require("mysql");

const dbConnection = mysql.createConnection({
  database: process.env.DATABASE,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  user: process.env.USER,
});

dbConnection.connect();

module.exports = dbConnection;
