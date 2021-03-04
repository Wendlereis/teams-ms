"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("users", "birth_date", {
        type: Sequelize.DATE,
        allowNull: true,
      }),

      queryInterface.addColumn("users", "email", {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      }),

      queryInterface.addColumn("users", "username", {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      }),

      queryInterface.addColumn("users", "password", {
        type: Sequelize.STRING,
        allowNull: false,
      }),

      queryInterface.addColumn("users", "is_active", {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      }),

      queryInterface.addColumn("users", "address_id", {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "addresses", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("users", "birth_date"),
      queryInterface.removeColumn("users", "email"),
      queryInterface.removeColumn("users", "username"),
      queryInterface.removeColumn("users", "password"),
      queryInterface.removeColumn("users", "is_active"),
      queryInterface.removeColumn("users", "address_id"),
    ]);
  },
};
