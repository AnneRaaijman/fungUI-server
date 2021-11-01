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
      observation.belongsTo(models.user),
        observation.belongsTo(models.mushroom),
        observation.belongsTo(models.park);
    }
  }
  observation.init(
    {
      observationTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      longitude: {
        type: DataTypes.FLOAT,
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
