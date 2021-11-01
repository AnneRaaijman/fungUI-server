"use strict";
const { Model } = require("sequelize");
const mushroom = require("./mushroom");
module.exports = (sequelize, DataTypes) => {
  class park extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      park.hasMany(models.observation);
      park.belongsToMany(models.mushroom, {
        through: "parkmushrooms",
        foreignKey: "parkId",
      });
    }
  }
  park.init(
    {
      parkName: { type: DataTypes.STRING, allowNull: false },
      cityName: { type: DataTypes.STRING, allowNull: false },
      latitude: { type: DataTypes.FLOAT, allowNull: false },
      longitude: { type: DataTypes.FLOAT, allowNull: false },
    },
    {
      sequelize,
      modelName: "park",
    }
  );
  return park;
};
