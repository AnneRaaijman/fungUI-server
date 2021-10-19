"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "parks",
      [
        {
          parkName: "Lange Bretten",
          cityName: "Amsterdam",
          latitude: 52.387175,
          longitude: 4.791129,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          parkName: "Sloterpark",
          cityName: "Amsterdam",
          latitude: 52.369002,
          longitude: 4.81305,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          parkName: "Rembrandtpark",
          cityName: "Amsterdam",
          latitude: 52.363958,
          longitude: 4.846653,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          parkName: "Het Amsterdamse Bos",
          cityName: "Amsterdam",
          latitude: 52.319262,
          longitude: 4.834044,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("parks", null, {});
  },
};
