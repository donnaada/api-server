'use strict';

module.exports = (sequelizeDB, DataTypes) => {
  return sequelizeDB.define('ingredients', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    unitOfMeasurement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};
