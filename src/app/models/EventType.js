import Sequelize, { Model } from "sequelize";

class EventType extends Model {
  static init(sequelize) {
    super.init(
      {
        short_name: Sequelize.STRING,
        long_name: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "events_types",
      }
    );

    return this;
  }
}

export default EventType;
