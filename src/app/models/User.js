import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        age: Sequelize.INTEGER,
        birth_date: Sequelize.DATE,
        email: Sequelize.STRING,
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        is_active: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.SystemRole, { foreignKey: "system_role_id" });
    this.belongsTo(models.Address, { foreignKey: "address_id" });
    this.belongsTo(models.PhoneNumber, { foreignKey: "phone_id" });
  }
}

export default User;
