const router = require("express").Router();
const searchController = require("../../controllers/search.js");

router.get("/search", searchController);

module.exports = router;