import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

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

    this.addHook("beforeCreate", async user => {
      user.password = await bcrypt.hash(user.password, 8);
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.SystemRole, { foreignKey: "system_role_id" });
    this.belongsTo(models.Address, { foreignKey: "address_id", as: "address" });
    this.belongsTo(models.PhoneNumber, { foreignKey: "phone_id", as: "phone" });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

export default User;
