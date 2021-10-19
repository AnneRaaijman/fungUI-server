"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class parkmushrooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      parkmushrooms.belongsTo(models.park);
      parkmushrooms.belongsTo(models.mushroom);
    }
  }
  parkmushrooms.init(
    {
      parkId: DataTypes.INTEGER,
      mushroomId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "parkmushrooms",
    }
  );
  return parkmushrooms;
};
