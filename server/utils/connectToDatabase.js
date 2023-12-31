const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

const connectToDatabase = () => {
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL database: ", err);
    } else console.log("Connected to Database");
  });
};

module.exports = { connectToDatabase, connection };
