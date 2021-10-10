"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class observation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      observation.belongsTo(models.user), observation.hasOne(models.mushroom);
    }
  }
  observation.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      observationTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "observation",
    }
  );
  return observation;
};
