import Sequelize, { Model } from "sequelize";

class Team extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Team;
