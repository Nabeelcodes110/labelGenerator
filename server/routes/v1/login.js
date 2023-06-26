const router = require("express").Router();
const loginController = require("../../controllers/login.js");

router.post("/login", loginController);

module.exports = router;
