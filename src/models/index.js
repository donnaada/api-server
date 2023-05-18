'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const recipe  = require('./recipe');
const ingredient  = require('./ingredient');

const DB_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DB_URL;

const sequelizeDatabase = new Sequelize(DB_URL);

const recipeModel = recipe(sequelizeDatabase, DataTypes);
const ingredientModel = ingredient(sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  recipeModel,
  ingredientModel,
};
