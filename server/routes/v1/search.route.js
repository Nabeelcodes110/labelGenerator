const router = require("express").Router();
const searchController = require("../../controllers/search.js");

router.get("/", searchController);

module.exports = router;
