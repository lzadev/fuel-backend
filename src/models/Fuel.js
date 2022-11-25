const { model, Schema } = require("mongoose");

const FuelSchema = Schema({
  name: String,
  code: String,
  currency: String,
  price: Number,
  previousPrice: Number,
  date: Date,
});

FuelSchema.methods.toJSON = function () {
  const { _id, __v, ...fuel } = this.toObject();

  fuel.id = _id;

  return fuel;
};

module.exports = model("Fuel", FuelSchema);
