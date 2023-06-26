const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server started");
});
