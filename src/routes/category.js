const express = require("express");
const router = express.Router();
const dbConnection = require("../database");

router.get("/", (req, res) => {
  //testing response
  res.status(200).json({
    message: "GET to categories successfully",
  });

  //TODO: Create all the logic for the data getting
});

router.post("/", (req, res) => {
  //testing response
  res.status(200).json({
    message: "POST to categories successfully",
  });

  //TODO: Create all the logic for the data posting
});

router.put("/", (req, res) => {
  //testing response
  res.status(200).json({
    message: "PUT to categories successfully",
  });

  //TODO: Create all the logic for the data putting
});

router.delete("/", (req, res) => {
  //testing response
  res.status(200).json({
    message: "DELETE to categories successfully",
  });
});

//TODO: Create all the logic for the data deleting

module.exports = router;
