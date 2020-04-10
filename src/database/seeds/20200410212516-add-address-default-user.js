"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "addresses",
      [
        {
          street: "Rua dos bobos",
          number: 0,
          complement: "Uma casa muito engraçada",
          neighbourhood: "Jardim da alegria",
          state: "Tocantins",
          city: "Palmas",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("addresses", null, {});
  },
};
