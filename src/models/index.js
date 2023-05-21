'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const recipe = require('./recipe');
const ingredient = require('./ingredient');
const Collection = require('./collection');

const DB_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DB_URL;

const sequelizeDatabase = new Sequelize(DB_URL);

const recipeModel = recipe(sequelizeDatabase, DataTypes);
const ingredientModel = ingredient(sequelizeDatabase, DataTypes);

recipeModel.hasMany(ingredientModel,{
  foreignKey: 'recipeId',
  sourceKey: 'id',
});
ingredientModel.belongsTo(recipeModel, {
  foreignKey: 'recipeId',
  targetKey: 'id',
});

module.exports = {
  sequelizeDatabase,
  recipe: new Collection(recipeModel),
  ingredientModel,
  ingredient: new Collection(ingredientModel),
};
