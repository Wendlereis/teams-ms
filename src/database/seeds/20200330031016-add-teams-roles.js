"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "teams_roles",
      [
        {
          name: "Coordenador",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Assessor",
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
    return queryInterface.bulkDelete("teams_roles", null, {});
  },
};
