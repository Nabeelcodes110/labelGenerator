const { connection: db } = require("../utils/connectToDatabase");


const searchFunc = async(req, res) => {
    const search = (callback) => {
        const query =
          "SELECT * FROM item_master";
    
        db.query(query, (err, results) => {
          if (err) {
            callback(err, null);
            return;
          }
          callback(null, results);
        });
      };
      search((err, items) => {
        if (err) {
          console.error("Could not find any items: ", err);
          return res.status(400).json({
            success: false,
            data: null,
          });
        
        } else {
          return res.status(200).json({
            success: true,
            data: items,
          });
        }
      });

}

module.exports = searchFunc;