'use strict';

const express = require('express');

const router = express.Router();

const { recipeModel, ingredientModel } = require('../models');


// Get All Records
router.get('/recipe', async (req, res, next) => {
  let allRecipes = await recipeModel.findAll();

  res.status(200).send(allRecipes);
});

// Get All Records
router.get('/recipeWithIngredients', async (req, res, next) => {
  let allRecipes = await recipeModel.findAll({include: {model: ingredientModel}});

  res.status(200).send(allRecipes);
});

// Get one Record
router.get('/recipe/:id', async (req, res, next) => {
  let singleRecipe = await recipeModel.findAll({where: {id: req.params.id}});

  res.status(200).send(singleRecipe);
});

//Add a record
router.post('/recipe', async (req, res, next) =>{
  let newRecipe = await recipeModel.create(req.body);

  res.status(200).send(newRecipe);
});

// //Update a record
router.put('/recipe/:id', async (req, res, next) =>{
  let name = req.body.name;
  let servingSize = req.body.servingSize;
  let category = req.body.category;

  await recipeModel.update({ name: name, servingSize: servingSize, category: category}, {where: {id: req.params.id}});

  let returnUpdatedDB = await recipeModel.findAll({where: {id: req.params.id}});

  res.status(200).send(returnUpdatedDB);
});

//Delete a record
router.delete('/recipe/:id', async (req, res, next) =>{

  recipeModel.destroy({
    where: {id: req.params.id},
  });

  let returnDeleted = await recipeModel.findAll({where: {id: req.params.id}});

  res.status(200).send(returnDeleted);
});

module.exports = router;
