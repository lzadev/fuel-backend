const { response } = require("express");
const { request } = require("express");
const { validationResult } = require("express-validator");
const { badRequestError } = require("../helpers/commonResponse");

const checkValidations = (req = request, res = response, next = next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return badRequestError(res, errors);
  }
  next();
};

module.exports = checkValidations;
