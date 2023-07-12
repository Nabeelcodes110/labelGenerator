const router = require("express").Router();
const analysisController = require("../../controllers/analysis");
const certificateController = require("../../controllers/certificate");

router.get("/", analysisController);
router.get("/certificate", certificateController);

module.exports = router;
