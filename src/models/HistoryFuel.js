const { model, Schema } = require("mongoose");

const HistoryFuelSchema = Schema({
  name: String,
  code: String,
  price: Number,
  startweek: String,
  endweek: String,
  startmonth: String,
  endmonth: String,
  year: String,
  startdate: Date,
});

HistoryFuelSchema.methods.toJSON = function () {
  const { _id, __v, ...fuelHistory } = this.toObject();

  fuelHistory.id = _id;

  return fuelHistory;
};

module.exports = model("HistoryFuelsDate", HistoryFuelSchema);
