import Sequelize, { Model } from "sequelize";

class Event extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        start_date: Sequelize.DATE,
        final_date: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.EventType, {
      foreignKey: "event_type_id",
      as: "event_type",
    });
  }
}

export default Event;
