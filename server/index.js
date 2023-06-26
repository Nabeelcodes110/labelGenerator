const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const { connectToDatabase } = require("./utils/connectToDatabase");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
connectToDatabase();

const PORT = process.env.PORT || 3000;

app.use("/api/v1", require("./routes/v1/login"));

app.listen(4000, () => {
  console.log("Server started");
});
