const express = require("express");
const app = express();

const productRouter = require("./routes/product");
const categoryRouter = require("./routes/category");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/product", productRouter);
app.use("/category", categoryRouter);

module.exports = app;
