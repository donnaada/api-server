'use strict';

const express = require('express');
const router = express.Router();
const { recipe, ingredient } = require('../models');


// Get All Records
router.get('/recipe', async (req, res, next) => {
  let allRecipes = await recipe.find();

  res.status(200).send(allRecipes);
});

// Get one Record
router.get('/recipe/:id', async (req, res, next) => {
  let singleRecipe = await recipe.findOne(req.params.id);

  res.status(200).send(singleRecipe);
});

//Add a record
router.post('/recipe', async (req, res, next) => {
  let newRecipe = await recipe.create(req.body);

  res.status(200).send(newRecipe);
});

//Update a record
router.put('/recipe/:id', async (req, res, next) => {
  await recipe.update(req.body, { where: { id: req.params.id } });

  let returnUpdatedDB = await recipe.find(req.params.id);

  res.status(200).send(returnUpdatedDB);
});

//Delete a record
router.delete('/recipe/:id', async (req, res, next) => {

  recipe.destroy({
    where: { id: req.params.id },
  });

  let returnDeleted = await recipe.findAll({ where: { id: req.params.id } });

  res.status(200).send(returnDeleted);
});

module.exports = router;
