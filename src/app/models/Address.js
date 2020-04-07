import Sequelize, { Model } from "sequelize";

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        street: Sequelize.STRING,
        number: Sequelize.INTEGER,
        complement: Sequelize.STRING,
        neighbourhood: Sequelize.STRING,
        state: Sequelize.STRING,
        city: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "addresses",
      }
    );

    return this;
  }
}

export default Address;
