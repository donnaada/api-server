'use strict';

const express = require('express');
const router = express.Router();
const { ingredientModel, recipe } = require('../models');


// Get All Records
router.get('/recipe', async (req, res, next) => {
  let allRecipes = await recipe.find();

  res.status(200).send(allRecipes);
});

// Get All Records with ingredeints
router.get('/recipeWithIngredients', async (req, res, next) => {
  let allRecipes = await recipe.findAllWith(ingredientModel);

  res.status(200).send(allRecipes);
});

router.get('/recipeWithIngredients/:id', async (req, res, next) => {
  let allRecipes = await recipe.findOneWith(req.params.id, ingredientModel);

  res.status(200).send(allRecipes);
});

// Get one Record
router.get('/recipe/:id', async (req, res, next) => {
  let singleRecipe = await recipe.find(req.params.id);

  res.status(200).send(singleRecipe);
});

//Add a record
router.post('/recipe', async (req, res, next) => {
  let newRecipe = await recipe.create(req.body);

  res.status(200).send(newRecipe);
});

//Update a record
router.put('/recipe/:id', async (req, res, next) => {
  await recipe.update(req.body, req.params.id);
  let returnUpdatedDB = await recipe.find(req.params.id);

  res.status(200).send(returnUpdatedDB);
});

//Delete a record
router.delete('/recipe/:id', async (req, res, next) => {
  recipe.delete(req.params.id);
  let returnDeleted = await recipe.find(req.params.id);

  res.status(200).send(returnDeleted);
});

module.exports = router;
