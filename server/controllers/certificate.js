const { asyncErrorHandler } = require("../utils/asyncErrorHandler");
const { connection: db } = require("../utils/connectToDatabase");

const getCertificate = asyncErrorHandler(async (req, res) => {
  const { batch_no } = req.body;
  const getCertificateAnalysis = (batch_no, callback) => {
    const query =
      "SELECT X.*,b.number_of_packs,b.quantity FROM (SELECT * from certificate_of_analysis a WHERE a.batch_no= ?) x LEFT JOIN packing_details b ON x.batch_no=b.batch_no;";
    // "SELECT X.*,b.number_of_packs,b.quantity FROM (SELECT a.item_name,a.speci_number,a.batch_no,a.manu_date,a.total_quantity from certificate_of_analysis a WHERE a.batch_no= ?) x LEFT JOIN packing_details b ON x.batch_no=b.batch_no;";
    const values = [batch_no];
    db.query(query, values, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  };
  getCertificateAnalysis(batch_no, (err, data) => {
    if (err) {
      return res.status(400).json({
        success: false,
        data: null,
      });
    } else {
      if (data.length == 0) {
        return res.status(400).json({
          success: false,
          message: "No data found1",
        });
      } else if (data.length == 1) {
        return res.status(200).json({
          success: true,
          data: data[0],
        });
      } else {
        const result = data[0];
        result.quantity = parseInt(data[0].quantity);
        for (let i = 1; i < data.length; i++) {
          result.number_of_packs += data[i].number_of_packs;
          result.quantity += +data[i].quantity;
        }

        return res.status(200).json({
          success: true,
          data: result,
        });
      }
    }
  });
});

module.exports = getCertificate;
