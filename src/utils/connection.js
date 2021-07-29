const dbConnection = require("../database");

const getConnection = function (callback) {
  dbConnection.getConnection((err, connection) => {
    if (err) {
      connection.release();
      throw err;
    }
    callback(connection);

    connection.on("error", (err) => {
      throw err;
      return;
    });
  });
};

module.exports = getConnection;
