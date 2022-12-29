const express = require("express");
const { check } = require("express-validator");
const {
  getAllFuels,
  getFuelById,
  createFuel,
  getFuelHistory,
} = require("../controllers/fuel.controller");
const checkIfExistsFuel = require("../helpers/dbvalidations");
const checkValidations = require("../middlewares/checkValidations");
const router = express.Router();

router.get("/", getAllFuels);
router.get(
  "/:id",
  [
    check("id", "You must provide a valid id").isMongoId(),
    check("id").custom(checkIfExistsFuel),
    checkIfExistsFuel,
  ],
  getFuelById
);
router.get("/history/:codigo", getFuelHistory);

router.post(
  "/",
  [
    check("name", "The name is required").not().isEmpty(),
    check("code", "The code is required").not().isEmpty(),
    check("currency", "The currency is required").not().isEmpty(),
    check("price", "The price is required").not().isEmpty().isNumeric(),
    check("previousPrice", "The previousPrice is required")
      .not()
      .isEmpty()
      .isNumeric(),
    check("date", "The date is required").not().isEmpty().isDate(),
    checkValidations,
  ],
  createFuel
);

module.exports = router;
