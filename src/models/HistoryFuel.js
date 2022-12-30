const { model, Schema } = require("mongoose");

const HistoryFuelSchema = Schema({
  Nombre: String,
  Codigo: String,
  Precio: Number,
  SemanaInicio: String,
  SemanaFin: String,
  MesInicio: String,
  MesFin: String,
  Anio: String,
});

HistoryFuelSchema.methods.toJSON = function () {
  const { _id, __v, ...fuelHistory } = this.toObject();

  fuelHistory.id = _id;

  return fuelHistory;
};

module.exports = model("HistoryFuel", HistoryFuelSchema);
