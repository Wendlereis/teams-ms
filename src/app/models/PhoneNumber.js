import Sequelize, { Model } from "sequelize";

class PhoneNumber extends Model {
  static init(sequelize) {
    super.init(
      {
        landline_phone: Sequelize.STRING,
        mobile_phone: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "phone_numbers",
      }
    );

    return this;
  }
}

export default PhoneNumber;
