const express = require("express");
const app = express();

const productRouter = require("./routes/product");
const categoryRouter = require("./routes/category");

app.use("/product", productRouter);
app.use("/category", categoryRouter);

module.exports = app;
