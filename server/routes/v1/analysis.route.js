const router = require("express").Router();
const analysisController = require("../../controllers/analysis");
const certificateController = require("../../controllers/certificate");

router.get("/", analysisController);
router.post("/certificate", certificateController);

module.exports = router;
