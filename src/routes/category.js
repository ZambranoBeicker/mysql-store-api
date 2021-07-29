const express = require("express");
const router = express.Router();
const {
  getAllData,
  insertData,
  deleteData,
  updateData,
} = require("../utils/queries");
const getConnection = require("../utils/connection");

router.get("/", (req, res) => {
  getConnection((connection) => {
    connection.query(getAllData("*", "category"), (err, rows, field) => {
      res.status(200).json({
        message: "GET to category successfully",
        data: rows,
      });
    });
  });
});

router.post("/", (req, res) => {
  const { name } = req.body;

  getConnection((connection) => {
    connection.query(
      insertData("name", "category", `?`),
      [name],
      (err, rows, field) => {
        if (!err) {
          res.status(200).json({
            message: "POST to category successfully",
            data: rows,
          });
        } else {
          throw err;
        }
      }
    );
  });
});

router.put("/:id", (req, res) => {
  const { name } = req.body;

  getConnection((connection) => {
    connection.query(
      updateData("category", "name =? ", "id = ?"),
      [name, req.params.id],
      (err, rows, field) => {
        if (!err) {
          res.status(200).json({
            message: "PUT to category successfully",
            data: rows,
          });
        } else {
          throw err;
        }
      }
    );
  });
});

router.delete("/:id", (req, res) => {
  getConnection((connection) => {
    connection.query(
      deleteData("category", "id =?"),
      [req.params.id],
      (err, rows, field) => {
        if (!err) {
          res.status(200).json({
            message: "DELETE to category successfully",
            data: rows,
          });
        } else {
          throw err;
        }
      }
    );
  });
});

module.exports = router;
