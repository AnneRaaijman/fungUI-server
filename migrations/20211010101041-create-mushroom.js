"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("mushrooms", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      commonNameDutch: {
        type: Sequelize.STRING,
      },
      commonNameEnglish: {
        type: Sequelize.STRING,
      },
      scientificName: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      isPoisonous: {
        type: Sequelize.BOOLEAN,
      },
      isDeadly: {
        type: Sequelize.BOOLEAN,
      },
      isEdible: {
        type: Sequelize.BOOLEAN,
      },
      capColor: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("mushrooms");
  },
};
