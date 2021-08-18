const dbConnection = require('../database')

//This is just a function to abstract the use
//of the connection logic. Ececute a callback
//with the connection as parameter, manage errors and

const getConnection = function (callback) {
  dbConnection.getConnection((err, connection) => {
    if (err) {
      connection.release()
      throw err
    }
    callback(connection)

    connection.on('error', (err) => {
      throw err
      return
    })
  })
}

module.exports = getConnection
