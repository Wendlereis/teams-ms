"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "events_types",
      [
        {
          short_name: "EJC",
          long_name: "Encontro de Jovens com Cristo",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          short_name: "ECC",
          long_name: "Encontro de Casais com Cristo",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          short_name: "EPC",
          long_name: "Encontro de Pais com Cristo",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("events_types", null, {});
  },
};
