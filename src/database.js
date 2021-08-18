require('dotenv').config()
const mysql = require('mysql2')

//The connection setup
const dbConnection = mysql.createPool({
  database: process.env.DATABASE,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  user: process.env.USER,
})

module.exports = dbConnection
