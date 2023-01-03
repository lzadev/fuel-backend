const { response } = require("express");
const { request } = require("express");

const { internalError } = require("../helpers/commonResponse");
const HistoryFuel = require("../models/HistoryFuel");

const getFuelHistory = async (req = request, res = response) => {
  try {
    const { code } = req.params;
    const { year } = req.query;

    const query = {
      code,
    };

    if (year !== undefined) {
      query.year = year;
    }

    let fuelHistory = await HistoryFuel.find(query);

    res.status(200).json({ total: fuelHistory.length, data: fuelHistory });
  } catch (error) {
    console.log("Error getting fuel history", error);
    internalError(res);
  }
};

module.exports = { getFuelHistory };
