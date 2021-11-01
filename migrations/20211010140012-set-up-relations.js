"use strict";

const observation = require("../models/observation");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("observations", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("observations", "mushroomId", {
      type: Sequelize.INTEGER,
      references: {
        model: "mushrooms",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("observations", "parkId", {
      type: Sequelize.INTEGER,
      references: {
        model: "parks",
        key: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("observations", "userId");
    await queryInterface.removeColumn("observations", "mushroomId");
  },
};
