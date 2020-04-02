"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "system_roles",
      [
        {
          name: "Administrador",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Dirigente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Membro",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("system_roles", null, {});
  },
};
