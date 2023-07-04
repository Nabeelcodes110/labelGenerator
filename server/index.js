const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/v1");
const { connectToDatabase } = require("./utils/connectToDatabase");
require("dotenv").config();
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());

connectToDatabase();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("OK");
});

app.use("/api/v1", routes);

app.all("*", (req, res, next) => {
  const err = new Error("Not Found");
  err.message = "invalid route provided";
  err.statusCode = 404;
  next(err);
});

app.use(errorHandler);

app.listen(4000, () => {
  console.log("Server started");
});
