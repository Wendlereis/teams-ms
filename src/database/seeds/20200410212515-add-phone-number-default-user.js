"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "phone_numbers",
      [
        {
          landline_phone: "1140028922",
          mobile_phone: "11940028922",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("phone_numbers", null, {});
  },
};
