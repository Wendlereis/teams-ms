"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          age: 1,
          created_at: new Date(),
          updated_at: new Date(),
          system_role_id: 1,
          birth_date: new Date(),
          email: "johndoe@wendler.dev",
          username: "johndoe",
          password: await bcrypt.hash("johndoe", 8),
          is_active: true,
          phone_id: 1,
          address_id: 1,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
