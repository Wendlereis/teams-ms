"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "teams",
      [
        {
          name: "Dirigentes",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Coordenadores Gerais",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Apresentadores",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Recepção",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Boa Vontade",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Confissões",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Compras",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Luz e Som",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Acolhida",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Animação",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Apoio",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Café",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Círculos",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Cozinha",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Liturgia",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Mini Mercado",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Ordem",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Secretaria",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Teatro",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Visitação",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Coleta",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("teams", null, {});
  },
};
