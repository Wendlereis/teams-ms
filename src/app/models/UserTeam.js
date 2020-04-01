import Sequelize, { Model } from "sequelize";

class UserTeam extends Model {
  static init(sequelize) {
    super.init(
      {
        event_id: Sequelize.INTEGER,
        user_id: Sequelize.INTEGER,
        team_id: Sequelize.INTEGER,
        team_role_id: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: "users_teams",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Event, {
      foreignKey: "event_id",
      as: "event",
    });

    this.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });

    this.belongsTo(models.Team, {
      foreignKey: "team_id",
      as: "team",
    });

    this.belongsTo(models.TeamRole, {
      foreignKey: "team_role_id",
      as: "team_role",
    });
  }
}

export default UserTeam;
