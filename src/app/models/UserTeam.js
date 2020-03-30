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
      }
    );
  }

  static associations(models) {
    this.hasMany(models.User);
    this.hasMany(models.Event);
  }
}

export default UserTeam;
