import Sequelize, { Model } from "sequelize";

class TeamRole extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "teams_roles",
      }
    );

    return this;
  }
}

export default TeamRole;
