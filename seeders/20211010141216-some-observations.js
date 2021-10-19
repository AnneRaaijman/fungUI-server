"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "observations",
      [
        {
          title: "Lange Bretten",
          observationTime: new Date(),
          image:
            "http://res.cloudinary.com/fungui/image/upload/v1634290849/tiwo0pijptrj6f4ziz8z.jpg",
          latitude: 52.38471742765507,
          longitude: 4.796489075652063,
          userId: 1,
          mushroomId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lange Bretten",
          observationTime: new Date(),
          image:
            "http://res.cloudinary.com/fungui/image/upload/v1634290960/zmgv9wrwhgq9rkh4y2qk.jpg3",
          latitude: 52.386517999888476,
          longitude: 4.796634554058984,
          userId: 1,
          mushroomId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lange Bretten",
          observationTime: new Date(),
          image:
            "http://res.cloudinary.com/fungui/image/upload/v1634302750/gzaajkfvfaeibd3geyxk.jpg",
          latitude: 52.38672010168758,
          longitude: 4.790062307912436,
          userId: 1,
          mushroomId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lange Bretten",
          observationTime: new Date(),
          image:
            "http://res.cloudinary.com/fungui/image/upload/v1634302872/mszux49vf2ranc999ujs.jpg",
          latitude: 52.3876955703695,
          longitude: 4.8231757891233205,
          userId: 1,
          mushroomId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sportpark Spieringhorn",
          observationTime: new Date(),
          image:
            "http://res.cloudinary.com/fungui/image/upload/v1634291041/zinyqjgm7qc1uyzkpjdc.jpg",
          latitude: 52.38710850153168,
          longitude: 4.821960671106354,
          userId: 1,
          mushroomId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sportpark Spieringhorn",
          observationTime: new Date(),
          image:
            "http://res.cloudinary.com/fungui/image/upload/v1634563444/iwylhe4orhtdhih4njws.jpg",
          latitude: 52.3874420231359,
          longitude: 4.82701255939901,
          userId: 1,
          mushroomId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Codaisseur",
          observationTime: new Date(),
          image:
            "http://res.cloudinary.com/fungui/image/upload/v1634561830/ztxcd4jvdvleylaa0w8d.jpg",
          latitude: 52.38838523348996,
          longitude: 4.823240619152784,
          userId: 1,
          mushroomId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("observations", null, {});
  },
};
