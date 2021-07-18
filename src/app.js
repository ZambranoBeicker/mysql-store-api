const express = require("express");
const app = express();

const productRouter = require("./routes/product");
const categoryRouter = require("./routes/category");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.raw());

app.use("/product", productRouter);
app.use("/category", categoryRouter);

module.exports = app;
