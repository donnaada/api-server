'use strict';

const express = require('express');

const router = express.Router();

const { ingredientModel } = require('../models');


// Get All Records
router.get('/ingredient', async (req, res, next) => {
  let allIngredients = await ingredientModel.findAll();

  res.status(200).send(allIngredients);
});

// Get one Record
router.get('/ingredient/:id', async (req, res, next) => {
  let allIngredients = await ingredientModel.findAll({where: {id: req.params.id}});

  res.status(200).send(allIngredients);
});

//Add a record
router.post('/ingredient', async (req, res, next) =>{
  let newIngredient = await ingredientModel.create(req.body);

  res.status(200).send(newIngredient);
});

// //Update a record
router.put('/ingredient/:id', async (req, res, next) =>{
  let name = req.body.name;
  let quantity = req.body.quantity;
  let unitOfMeasurement = req.body.unitOfMeasurement;

  await ingredientModel.update({ name: name, quantity: quantity, unitOfMeasurement: unitOfMeasurement}, {where: {id: req.params.id}});

  let returnUpdatedDB = await ingredientModel.findAll({where: {id: req.params.id}});

  res.status(200).send(returnUpdatedDB);
});

//Delete a record
router.delete('/ingredient/:id', async (req, res, next) =>{

  ingredientModel.destroy({
    where: {id: req.params.id},
  });

  let returnDeleted = await ingredientModel.findAll({where: {id: req.params.id}});

  res.status(200).send(returnDeleted);
});

module.exports = router;
