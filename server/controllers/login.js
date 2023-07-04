const { asyncErrorHandler } = require("../utils/asyncErrorHandler");
const { connection: db } = require("../utils/connectToDatabase");

const loginFunc = asyncErrorHandler(async (req, res) => {
  // const { Username, Password } = req.body;
  const Username = req.body.Username;
  const Password = req.body.Password;

  if (Username.trim().length == 0 || Password.trim().length == 0) {
    return res.status(400).json({
      auth: false,
      data: "UnAuthorizedUser",
    });
  }

  const searchUser = (Username, Password, callback) => {
    const query =
      "SELECT * FROM employee_registration WHERE login_name COLLATE latin1_bin = ? AND password COLLATE latin1_bin = ?";
    const values = [Username, Password];

    db.query(query, values, (err, results) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, results);
    });
  };
  searchUser(Username, Password, (err, users) => {
    if (err) {
      console.error("Error searching for user: ", err);
      return;
    } else {
      if (!users || users.length == 0) {
        return res.status(400).json({
          auth: false,
          data: "unAuthorizedUser",
        });
      }
      return res.status(200).json({
        auth: true,
        data: "Login successful",
      });
    }
  });
});

module.exports = loginFunc;
