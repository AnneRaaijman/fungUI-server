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
      mushroom.hasMany(models.observation);
      mushroom.belongsToMany(models.park, {
        through: "parkmushrooms",
        foreignKey: "mushroomId",
      });
    }
  }
  mushroom.init(
    {
      commonNameDutch: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      commonNameEnglish: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      scientificName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
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
      capColor: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "mushroom",
    }
  );
  return mushroom;
};
