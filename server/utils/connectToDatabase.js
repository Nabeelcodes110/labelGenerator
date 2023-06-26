const mysql = require("mysql");

const connectToDatabase = () => {
  const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  });

  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL database: ", err);
    }
    console.log("Connected to Database");
  });
};

module.exports = { connectToDatabase };
