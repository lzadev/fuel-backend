const express = require("express");
const { getFuelHistory } = require("../controllers/fuel_history.controller");
const router = express.Router();

router.get("/:code", getFuelHistory);

module.exports = router;
