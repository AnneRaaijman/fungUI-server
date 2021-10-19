"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("parkmushrooms", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      parkId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "parks",
          key: "id",
        },
      },
      mushroomId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "mushrooms",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("parkmushrooms");
  },
};
