'use strict';

const express = require('express');
const router = express.Router();
const { ingredient } = require('../models');

// Get All Records
router.get('/ingredient', async (req, res, next) => {
  let allIngredients = await ingredient.find();

  res.status(200).send(allIngredients);
});

// Get one Record
router.get('/ingredient/:id', async (req, res, next) => {
  let allIngredients = await ingredient.find(req.params.id);

  res.status(200).send(allIngredients);
});

//Add a record
router.post('/ingredient', async (req, res, next) => {
  let newIngredient = await ingredient.create(req.body);

  res.status(200).send(newIngredient);
});

//Update a record
router.put('/ingredient/:id', async (req, res, next) => {
  await ingredient.update(res.body,req.params.id);
  let returnUpdatedDB = await ingredient.find(req.params.id);

  res.status(200).send(returnUpdatedDB);
});

//Delete a record
router.delete('/ingredient/:id', async (req, res, next) => {
  ingredient.delete(req.params.id);
  let returnDeleted = await ingredient.find(req.params.id);

  res.status(200).send(returnDeleted);
});



module.exports = router;
