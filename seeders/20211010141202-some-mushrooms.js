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
          isPoisonous: "FALSE",
          isDeadly: "FALSE",
          isEdible: "TRUE",
          capColor: "brown",
          createdAt: "2021-10-19 13:05:29.753+00",
          updatedAt: "2021-10-19 13:05:29.753+00",
        },
        {
          commonNameDutch: "Vroeg eekhoorntjesbrood",
          commonNameEnglish: "Summer cep",
          scientificName: "Boletus reticulatus",
          image:
            "https://en.wikipedia.org/wiki/Boletus_reticulatus#/media/File:Boletus.JPG",
          isPoisonous: "FALSE",
          isDeadly: "FALSE",
          isEdible: "TRUE",
          capColor: "brown",
          createdAt: "2021-10-19 13:05:29.753+00",
          updatedAt: "2021-10-19 13:05:29.753+00",
        },
        {
          commonNameDutch: "Roodgrijze Melkzwam",
          commonNameEnglish: "grey milkcap",
          scientificName: "lactarius vietus",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Lactarius_vietus041031w.jpg/1200px-Lactarius_vietus041031w.jpg",
          isPoisonous: "FALSE",
          isDeadly: "FALSE",
          isEdible: "TRUE",
          capColor: "brown/red/grey",
          createdAt: "2021-10-19 13:05:29.753+00",
          updatedAt: "2021-10-19 13:05:29.753+00",
        },
        {
          commonNameDutch: "Geschubde Inktzwam",
          commonNameEnglish: "Shaggy Mane",
          scientificName: "Coprinus comatus",
          image:
            "https://i0.wp.com/practicalselfreliance.com/wp-content/uploads/2018/09/Foraging-Shaggy-Mane-Mushrooms-1-of-7.jpg",
          isPoisonous: "FALSE",
          isDeadly: "FALSE",
          isEdible: "TRUE",
          capColor: "white/bronw",
          createdAt: "2021-10-19 13:05:29.753+00",
          updatedAt: "2021-10-19 13:05:29.753+00",
        },
        {
          commonNameDutch: "Waaierkorstzwam",
          commonNameEnglish: "Yellowing curtain crust",
          scientificName: "Stereum Subtomentosum",
          image:
            "https://www.verspreidingsatlas.nl/photopath/Stereum_subtomentosum_HH2_nmv.jpg",
          isPoisonous: "TRUE",
          isDeadly: "FALSE",
          isEdible: "FALSE",
          capColor: "orange/yellow",
          createdAt: "2021-10-19 13:05:29.753+00",
          updatedAt: "2021-10-19 13:05:29.753+00",
        },
        {
          commonNameDutch: "Langsteelfranjehoed",
          commonNameEnglish: "Conical Brittlestem mushroom",
          scientificName: "parasola conopilus",
          image:
            "https://www.verspreidingsatlas.nl/photopath/Psathyrella_conopilus_HH3_nmv.jpg",
          isPoisonous: "TRUE",
          isDeadly: "FALSE",
          isEdible: "FALSE",
          capColor: "brown/white",
          createdAt: "2021-10-19 13:05:29.753+00",
          updatedAt: "2021-10-19 13:05:29.753+00",
        },
        {
          commonNameDutch: "Draadknotszwam",
          commonNameEnglish: "Macrotyphula juncea",
          scientificName: "Macrotyphula juncea",
          image:
            "https://www.mykoweb.com/CAF/photos/Macrotyphula_juncea%28mgw-04%29.jpg",
          isPoisonous: "TRUE",
          isDeadly: "FALSE",
          isEdible: "FALSE",
          capColor: "brown/red/grey",
          createdAt: "2021-10-19 13:05:29.753+00",
          updatedAt: "2021-10-19 13:05:29.753+00",
        },
        {
          commonNameDutch: "Vliegenzwam",
          commonNameEnglish: "Fly Agaric",
          scientificName: "Amanita Muscaria",
          image:
            "https://en.wikipedia.org/wiki/Amanita_muscaria#/media/File:Amanita_muscaria_3_vliegenzwammen_op_rij.jpg",
          isPoisonous: "TRUE",
          isDeadly: "FALSE",
          isEdible: "TRUE",
          capColor: "white/red",
          createdAt: "2021-10-19 13:05:29.753+00",
          updatedAt: "2021-10-19 13:05:29.753+00",
        },
        {
          commonNameDutch: "Stinkparasolzwam",
          commonNameEnglish: "Stinking Dapperling",
          scientificName: "Lepiota cristata",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/f/fe/2011-12-01_Lepiota_cristata_%28Bolton%29_P._Kumm_186612.jpg",
          isPoisonous: "TRUE",
          isDeadly: "FALSE",
          isEdible: "FALSE",
          capColor: "white/brown",
          createdAt: "2021-10-19 13:05:29.753+00",
          updatedAt: "2021-10-19 13:05:29.753+00",
        },
        {
          commonNameDutch: "Grote kale inktzwam",
          commonNameEnglish: "Common Inkcap",
          scientificName: "Coprinopsis atramentaria",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/3/30/Coprinopsis_atramentaria_3_-_Lindsey.jpg",
          isPoisonous: "TRUE",
          isDeadly: "FALSE",
          isEdible: "FALSE",
          capColor: "white/brown/black",
          createdAt: "2021-10-19 13:05:29.753+00",
          updatedAt: "2021-10-19 13:05:29.753+00",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("mushrooms", null, {});
  },
};
