require("dotenv").config();
const mysql = require("mysql2");

const dbConnection = mysql.createConnection({
  database: process.env.DATABASE,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  user: process.env.USER,
});

module.exports = dbConnection;
