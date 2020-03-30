import Sequelize from "sequelize";
import databaseConfig from "../config/database";

import User from "../app/models/User";
import Event from "../app/models/Event";
import UserTeam from "../app/models/UserTeam";

const models = [User, Event, UserTeam];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
