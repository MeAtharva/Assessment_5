const express = require("express");
const router = express.Router();

const costomercontroller = require("../controller/customer");

//To get all customer data
router.get("/", costomercontroller.get_all);

//To get customer data by name
router.get("/:firstName", costomercontroller.get_one);

module.exports = router;
