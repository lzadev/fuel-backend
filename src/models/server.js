const express = require("express");
const cors = require("cors");
const fuelRouter = require("../routes/fuel.routes");
const fuelHistoryRouter = require("../routes/fuel_history.routes");
const connect = require("../database/mongoConnection");
class Server {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.app.use("/api/fuels", fuelRouter);
    this.app.use("/api/fuels/history", fuelHistoryRouter);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  async start() {
    try {
      const port = process.env.PORT || "3000";

      await connect(process.env.MONGO_URI || "");
      this.app.listen(port, () => {
        console.log(`The server is running on port ${port}`);
      });
    } catch (error) {
      console.log("Error trying to connect with the server", error);
    }
  }
}

module.exports = Server;
