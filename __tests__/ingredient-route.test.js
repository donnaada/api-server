'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models');
const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('ingredient route', () => {

  //404 on bad route
  test('Test Bad Route', async () => {
    const res = await request.get('/bad');
    expect(res.status).toEqual(404);
  });

  //404 on bad method
  test('Test Bad Method', async () => {
    let res = await request.post('/');
    expect(res.status).toEqual(404);

    res = await request.put('/');
    expect(res.status).toEqual(404);

    res = await request.delete('/');
    expect(res.status).toEqual(404);
  });

  //create record
  test('create Ingredient', async () => {
    let res = await request.post('/ingredient').send({
      name: 'Chicken',
      quantity: 6,
      unitOfMeasurement: 'Pieces',
      recipeID: 1,
    });

    expect(res.status).toEqual(200);
    expect(res.body.name).toEqual('Chicken');
    expect(res.body.quantity).toEqual(6);
    // expect(res.body.recipeID).toEqual(1);
  });

  //list of records
  test('Get all Ingredients', async () => {
    let res = await request.get('/ingredient');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expect.arrayContaining(res.body));
  });

  //read a record
  test('Get Ingredient by ID', async () => {
    let res = await request.get('/ingredient/1');
    expect(res.status).toEqual(200);
    expect(res.body[0].name).toEqual('Chicken');
    expect(res.body[0].quantity).toEqual(6);
    // expect(res.body[0].recipeID).toEqual(1);
  });
});
