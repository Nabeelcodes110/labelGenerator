const { asyncErrorHandler } = require("../utils/asyncErrorHandler");
const { connection: db } = require("../utils/connectToDatabase");

const getCertificateAnalysis = asyncErrorHandler(async (req, res, next) => {
  const { item_name, part_number } = req.body;
  const getProducts = (item_name, part_number, callback) => {
    const query =
      "SELECT a.item_group , a.part_number,a.item_name, a.speci_number ,a.batch_no , a.creator , a.approver from  certificate_of_analysis a WHERE a.part_number= ? AND a.status='Active' AND a.item_name = ?";
    const values = [part_number, item_name];
    db.query(query, values, (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result);
    });
  };
  getProducts(item_name, part_number, (err, data) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "No data found",
      });
    } else {
      if (!data || data.length == 0) {
        return res.status(400).json({
          success: false,
          message: "No data found1",
        });
      } else {
        return res.status(200).json({
          success: true,
          data: data,
        });
      }
    }
  });
});

module.exports = getCertificateAnalysis;
