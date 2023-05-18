'use strict';

module.exports = (sequelizeDB, DataTypes) =>{
  return sequelizeDB.define('ingredients',{
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    unitOfMeasurement:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipeID:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
