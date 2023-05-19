'use strict';

const express = require('express');
const cors = require('cors');
const recipeRouter = require('./routes/recipe');
const ingredientRouter = require('./routes/ingredient');

const notFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500');

const app = express();

app.use(cors());
app.use(express.json());

app.use(recipeRouter);
app.use(ingredientRouter);

//ROUTES
app.get('/', (req, res, next) => {
  res.status(200).send('Welcome to our Server!!');
});


app.get('/bad', (req, res, next) => {
  res.status(404).send('404 Not Found');
  next('You have reached a bad path');
});

app.use('*', notFound);
app.use(serverError);

const start = (port) => app.listen(port, () => console.log(`We good and on port ${port}`));

module.exports = { start, app };
