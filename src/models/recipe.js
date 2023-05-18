'use strict';

module.exports = (sequelizeDB, DataTypes) =>{
  return sequelizeDB.define('recipes',{
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    servingSize:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    category:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
