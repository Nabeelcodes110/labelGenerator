const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pratham@2401",
  database: "globespe",
});

const connectToDatabase = () => {
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL database: ", err);
    } else console.log("Connected to Database");
  });
};

module.exports = { connectToDatabase, connection };
