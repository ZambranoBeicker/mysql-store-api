const express = require("express");
const router = express.Router();
const {
  getAllData,
  insertData,
  deleteData,
  updateData,
} = require("../utils/queries");
const dbConnection = require("../database");

router.get("/query", (req, res) => {
  //testing response

  //TODO: Create all the logic for the data getting

  res.status(200).json({
    message: `this is your query: ` + JSON.stringify(req.query.search),
  });
});

router.get("/", (req, res) => {
  //testing response

  //TODO: Create all the logic for the data getting
  //
  if (req.query.search) {
    dbConnection.query(
      `SELECT * FROM product WHERE name LIKE '%${req.query.search}%'`,
      (err, rows, field) => {
        if (err) {
          throw err;
        }

        res.status(200).json({
          message: "GET to products successfully",
          log: req.query.search,
          data: rows,
        });
      }
    );

    return;
  }

  dbConnection.query(getAllData("*", "product"), (err, rows, field) => {
    res.status(200).json({
      message: "GET to products successfully",
      data: rows,
    });
  });
});

router.post("/", (req, res) => {
  //testing response
  //TODO: Create all the logic for the data posting
  //
  const { name, price, category, discount, url_image } = req.body;

  dbConnection.query(
    insertData(
      "name, price, category, discount, url_image",
      "product",
      `?, ?, ?, ?, ?`
    ),
    [name, price, category, discount, url_image],
    (err, rows, field) => {
      if (!err) {
        res.status(200).json({
          message: "POST to products successfully",
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

  const { name, price, category, discount, url_image } = req.body;

  dbConnection.query(
    updateData(
      "product",
      "name =?, price =?, discount = ?, url_image = ?, category =?",
      "id = ?"
    ),

    [name, price, discount, url_image, category, req.params.id],
    (err, rows, field) => {
      if (!err) {
        res.status(200).json({
          message: "PUT to products successfully",
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
    deleteData("product", "id =?"),
    [req.params.id],
    (err, rows, field) => {
      if (!err) {
        res.status(200).json({
          message: "DELETE to products successfully",
          data: rows,
        });
      } else {
        throw err;
      }
    }
  );
});

module.exports = router;
