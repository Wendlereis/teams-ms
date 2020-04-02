"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("users", "system_role_id", {
      type: Sequelize.INTEGER,
      references: { model: "system_roles", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("users", "system_role_id");
  },
};
