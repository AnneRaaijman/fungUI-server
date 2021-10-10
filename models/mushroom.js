"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mushroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      mushroom.belongsToMany(models.observation);
    }
  }
  mushroom.init(
    {
      commonNameDutch: DataTypes.STRING,
      commonNameEnglish: DataTypes.STRING,
      scientificName: {
        type: DataTypes.STRING,
        unique: true,
      },
      isPoisonous: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isDeadly: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isEdible: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      capColor: DataTypes.SRING,
    },
    {
      sequelize,
      modelName: "mushroom",
    }
  );
  return mushroom;
};
