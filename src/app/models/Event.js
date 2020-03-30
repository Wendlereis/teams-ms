import Sequelize, { Model } from "sequelize";

class Event extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        start_date: Sequelize.DATE,
        final_date: Sequelize.DATE,
        event_type_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }

  static associations(models) {
    this.belongsTo(models.UserTeams);
  }
}

export default Event;
