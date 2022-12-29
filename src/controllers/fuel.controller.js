const { response } = require("express");
const { request } = require("express");

const { internalError } = require("../helpers/commonResponse");

const Fuel = require("../models/Fuel");
const HistoryFuel = require("../models/HistoryFuel");

const getAllFuels = async (req = request, res = response) => {
  try {
    const [total, fuels] = await Promise.all([
      Fuel.countDocuments(),
      Fuel.find({}),
    ]);

    res.status(200).json({ total, data: fuels });
  } catch (error) {
    console.log("Error getting all fuels", error);
    internalError(res);
  }
};

const getFuelHistory = async (req = request, res = response) => {
  try {
    const { codigo } = req.params;

    let fuelHistory = await HistoryFuel.find({ Codigo: codigo });

    res.status(200).json({ total: fuelHistory.length, data: fuelHistory });
  } catch (error) {
    console.log("Error getting all fuels", error);
    internalError(res);
  }
};

const getFuelById = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const fuel = await Fuel.findById({ _id: id });
    return res.status(200).json({ total: 1, data: fuel });
  } catch (error) {
    console.log("Error getting all cities", error);
    internalError(res);
  }
};

const createFuel = async (req = request, res = response) => {
  try {
    const { name, code, currency, price, previousPrice, date, iconPath } =
      req.body;
    const newFuel = new Fuel({
      name,
      code,
      currency,
      price,
      previousPrice,
      date,
      iconPath,
    });

    await newFuel.save();
    res.json({ data: newFuel });
  } catch (error) {
    console.log(error);
    internalError(res);
  }
};

module.exports = { getAllFuels, getFuelById, createFuel, getFuelHistory };
