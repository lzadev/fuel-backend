const { response } = require("express");
const { request } = require("express");

const notFound = (req = request, res = response) => {
  return res.status(404).json({
    msg: `The serve does not reconize the route ${req.url}`,
  });
};

module.exports = notFound;
