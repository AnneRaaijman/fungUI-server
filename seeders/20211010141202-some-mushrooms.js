"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "mushrooms",
      [
        {
          commonNameDutch: "Gewone berkenboleet",
          commonNameEnglish: "Brown birch-bolete",
          scientificName: "Leccinum Scabrum",
          image:
            "https://www.first-nature.com/fungi/images/boletaceae/leccinum-scabrum8.jpg",
          isPoisonous: false,
          isDeadly: false,
          isEdible: true,
          capColor: "brown",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          commonNameDutch: "Waaierkorstzwam",
          commonNameEnglish: "Yellowing curtain crust",
          scientificName: "Stereum Subtomentosum",
          image:
            "https://www.verspreidingsatlas.nl/photopath/Stereum_subtomentosum_HH2_nmv.jpg",
          isPoisonous: true,
          isDeadly: false,
          isEdible: false,
          capColor: "orange/yellow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          commonNameDutch: "Langsteelfranjehoed",
          commonNameEnglish: "Conical Brittlestem mushroom",
          scientificName: "parasola conopilus",
          image:
            "https://www.verspreidingsatlas.nl/photopath/Psathyrella_conopilus_HH3_nmv.jpg",
          isPoisonous: true,
          isDeadly: false,
          isEdible: false,
          capColor: "brown/white",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          commonNameDutch: "Vroeg eekhoorntjesbrood",
          commonNameEnglish: "Summer cep",
          scientificName: "Boletus reticulatus ",
          image:
            "https://en.wikipedia.org/wiki/Boletus_reticulatus#/media/File:Boletus.JPG",
          isPoisonous: false,
          isDeadly: false,
          isEdible: true,
          capColor: "brown",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          commonNameDutch: "Roodgrijze Melkzwam",
          commonNameEnglish: "grey milkcap",
          scientificName: "lactarius vietus",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Lactarius_vietus041031w.jpg/1200px-Lactarius_vietus041031w.jpg",
          isPoisonous: false,
          isDeadly: false,
          isEdible: true,
          capColor: "brown/red/grey",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          commonNameDutch: "Draadknotszwam",
          commonNameEnglish: "Macrotyphula juncea",
          scientificName: "Macrotyphula juncea",
          image:
            "https://www.mykoweb.com/CAF/photos/Macrotyphula_juncea%28mgw-04%29.jpg",
          isPoisonous: true,
          isDeadly: false,
          isEdible: false,
          capColor: "brown/red/grey",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          commonNameDutch: "Vliegenzwam",
          commonNameEnglish: "Fly Agaric",
          scientificName: "Amanita Muscaria",
          image:
            "https://en.wikipedia.org/wiki/Amanita_muscaria#/media/File:Amanita_muscaria_3_vliegenzwammen_op_rij.jpg",
          isPoisonous: true,
          isDeadly: false,
          isEdible: true,
          capColor: "white/red",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          commonNameDutch: "Geschubde Inktzwam",
          commonNameEnglish: "Shaggy Mane",
          scientificName: "Coprinus comatus",
          image:
            "https://i0.wp.com/practicalselfreliance.com/wp-content/uploads/2018/09/Foraging-Shaggy-Mane-Mushrooms-1-of-7.jpg",
          isPoisonous: false,
          isDeadly: false,
          isEdible: true,
          capColor: "white/bronw",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("mushrooms", null, {});
  },
};
