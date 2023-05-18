'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models');
const request = supertest(app);

beforeAll(async() => {
  await sequelizeDatabase.sync();
});

afterAll(async() => {
  await sequelizeDatabase.drop();
});

describe('ingredient route',  () =>{
  test('create ingredient', async() =>{
    let res = await request.post('/ingredient').send({
      name:'Vanilla Extract',
      quantity:1,
      unitOfMeasurement:'tbsp',
      recipeId: 1,
    });

    expect(res.status).toEqual(200);
    expect(res.body.name).toEqual('Vanilla Extract');
    expect(res.body.quantity).toEqual(1);
    expect(res.body.unitOfMeasurement).toEqual('tbsp');
    expect(res.body.recipeId).toEqual(1);
  });
});
