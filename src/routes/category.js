const express = require("express");
const router = express.Router();
const {
  getAllData,
  insertData,
  deleteData,
  updateData,
} = require("../utils/queries");
const dbConnection = require("../database");

router.get("/", (req, res) => {
  //testing response

  //TODO: Create all the logic for the data getting

  dbConnection.query(getAllData("*", "category"), (err, rows, field) => {
    res.status(200).json({
      message: "GET to category successfully",
      data: rows,
    });
  });
});

router.post("/", (req, res) => {
  //testing response
  //TODO: Create all the logic for the data posting
  //
  const { name } = req.body;

  dbConnection.query(
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

router.put("/:id", (req, res) => {
  //testing response
  //TODO: Create all the logic for the data putting

  const { name } = req.body;

  dbConnection.query(
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
  //
});

router.delete("/:id", (req, res) => {
  //testing response
  //TODO: Create all the logic for the data deleting

  dbConnection.query(
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

module.exports = router;
