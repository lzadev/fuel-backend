const { default: mongoose } = require("mongoose");

const connect = async (credentials) => {
  return mongoose.connect(credentials);
};

module.exports = connect;
