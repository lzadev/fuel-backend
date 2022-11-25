const { response } = require("express");

const badRequestError = (res = response, errors = {}) => {
  return res.status(400).json({
    errors,
  });
};

const internalError = (res = response) => {
  return res.status(500).json({
    msg: "An error has ocurred, the server cannot process the request try again or later",
  });
};

module.exports = { internalError, badRequestError };
