const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const { connectToDatabase } = require("./utils/connectToDatabase");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
connectToDatabase();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server started");
});
