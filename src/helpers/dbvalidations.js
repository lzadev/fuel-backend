const Fuel = require("../models/Fuel");

const checkIfExistsFuel = async (id) => {
  const fuel = await Fuel.findOne({ _id: id });

  if (!fuel) {
    throw new Error(`The fuel with id ${id} does not exist`);
  }
};

module.exports = checkIfExistsFuel;
