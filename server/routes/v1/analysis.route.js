const router = require("express").Router();
const analysisController = require("../../controllers/analysis");

router.get("/", analysisController);

module.exports = router;
