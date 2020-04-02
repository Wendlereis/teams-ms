import Sequelize from "sequelize";
import databaseConfig from "../config/database";

import Event from "../app/models/Event";
import EventType from "../app/models/EventType";
import Team from "../app/models/Team";
import TeamRole from "../app/models/TeamRole";
import User from "../app/models/User";
import UserTeam from "../app/models/UserTeam";
import SystemRole from "../app/models/SystemRole";

const models = [Event, EventType, Team, TeamRole, User, UserTeam, SystemRole];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
