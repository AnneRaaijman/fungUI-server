"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "observations",
      [
        {
          title: "Lange Bretten",
          observationTime: "2021-10-19 13:05:29.78+00",
          image:
            "http://res.cloudinary.com/fungui/image/upload/v1634290849/tiwo0pijptrj6f4ziz8z.jpg",
          latitude: 52.38471742765507,
          longitude: 4.796489075652063,
          createdAt: "2021-10-19 13:05:29.78+00",
          updatedAt: "2021-10-19 13:05:29.78+00",
          userId: 1,
          mushroomId: 1,
        },
        {
          title: "Lange Bretten",
          observationTime: "2021-10-19 13:05:29.78+00",
          image:
            "http://res.cloudinary.com/fungui/image/upload/v1634290960/zmgv9wrwhgq9rkh4y2qk.jpg3",
          latitude: 52.386517999888476,
          longitude: 4.796634554058984,
          createdAt: "2021-10-19 13:05:29.78+00",
          updatedAt: "2021-10-19 13:05:29.78+00",
          userId: 1,
          mushroomId: 6,
        },
        {
          title: "Lange Bretten",
          observationTime: "2021-10-19 13:05:29.78+00",
          image:
            "http://res.cloudinary.com/fungui/image/upload/v1634302750/gzaajkfvfaeibd3geyxk.jpg",
          latitude: 52.38672010168758,
          longitude: 4.790062307912436,
          createdAt: "2021-10-19 13:05:29.78+00",
          updatedAt: "2021-10-19 13:05:29.78+00",
          userId: 1,
          mushroomId: 2,
        },
        {
          title: "Lange Bretten",
          observationTime: "2021-10-19 13:05:29.78+00",
          image:
            "http://res.cloudinary.com/fungui/image/upload/v1634302872/mszux49vf2ranc999ujs.jpg",
          latitude: 52.3876955703695,
          longitude: 4.8231757891233205,
          createdAt: "2021-10-19 13:05:29.78+00",
          updatedAt: "2021-10-19 13:05:29.78+00",
          userId: 1,
          mushroomId: 5,
        },
        {
          title: "Sportpark Spieringhorn",
          observationTime: "2021-10-19 13:05:29.78+00",
          image:
            "http://res.cloudinary.com/fungui/image/upload/v1634291041/zinyqjgm7qc1uyzkpjdc.jpg",
          latitude: 52.38710850153168,
          longitude: 4.821960671106354,
          createdAt: "2021-10-19 13:05:29.78+00",
          updatedAt: "2021-10-19 13:05:29.78+00",
          userId: 1,
          mushroomId: 3,
        },
        {
          title: "Sportpark Spieringhorn",
          observationTime: "2021-10-19 13:05:29.78+00",
          image:
            "http://res.cloudinary.com/fungui/image/upload/v1634563444/iwylhe4orhtdhih4njws.jpg",
          latitude: 52.3874420231359,
          longitude: 4.82701255939901,
          createdAt: "2021-10-19 13:05:29.78+00",
          updatedAt: "2021-10-19 13:05:29.78+00",
          userId: 1,
          mushroomId: 8,
        },
        {
          title: "Codaisseur",
          observationTime: "2021-10-19 13:05:29.78+00",
          image:
            "http://res.cloudinary.com/fungui/image/upload/v1634561830/ztxcd4jvdvleylaa0w8d.jpg",
          latitude: 52.38838523348996,
          longitude: 4.823240619152784,
          createdAt: "2021-10-19 13:05:29.78+00",
          updatedAt: "2021-10-19 13:05:29.78+00",
          userId: 1,
          mushroomId: 1,
        },
        {
          title: "Sloterpark",
          observationTime: "2021-10-24 10:18:56+00",
          image:
            "http://res.cloudinary.com/fungui/image/upload/v1635157216/zzym5bkacycvscpwrnu8.jpg",
          latitude: 52.369958648446485,
          longitude: 4.812206681817771,
          createdAt: "2021-10-25 10:20:16.989+00",
          updatedAt: "2021-10-25 10:20:16.989+00",
          userId: 1,
          mushroomId: 10,
        },
        {
          title: "Sloterpark",
          observationTime: "2021-10-24 10:22:40+00",
          image:
            "http://res.cloudinary.com/fungui/image/upload/v1635157387/rrrlcphu6v0bivrxquae.jpg",
          latitude: 52.370602496425136,
          longitude: 4.813146544620395,
          createdAt: "2021-10-25 10:23:08.447+00",
          updatedAt: "2021-10-25 10:23:08.447+00",
          userId: 1,
          mushroomId: 9,
        },
        {
          title: "Sportpark Spieringhorn",
          observationTime: "2021-10-29 10:32:30+00",
          image:
            "http://res.cloudinary.com/fungui/image/upload/v1635503622/x9sjbcmm7hstmtolxpcr.jpg",
          latitude: 52.38704883382478,
          longitude: 4.822465125471354,
          createdAt: "2021-10-29 10:33:42.59+00",
          updatedAt: "2021-10-29 10:33:42.59+00",
          userId: 1,
          mushroomId: 9,
        },
        {
          title: "Sportpark Spieringhorn",
          observationTime: "2021-10-29 15:38:01+00",
          image:
            "http://res.cloudinary.com/fungui/image/upload/v1635522342/z8wvma2zwz5mz94tfpvb.jpg",
          latitude: 52.38692493191361,
          longitude: 4.824213925749064,
          createdAt: "2021-10-29 15:45:43.265+00",
          updatedAt: "2021-10-29 15:45:43.265+00",
          userId: 1,
          mushroomId: 8,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("observations", null, {});
  },
};
