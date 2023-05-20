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

describe('recipe route', () => {

  //404 on bad route
  test('Test Bad Route', async () => {
    const res = await request.get('/bad');
    expect(res.status).toEqual(404);
  });

  //404 on bad method
  test('Test Bad Method', async () => {
    let res = await request.post('/recipes');
    expect(res.status).toEqual(404);

    res = await request.put('/');
    expect(res.status).toEqual(404);

    res = await request.delete('/');
    expect(res.status).toEqual(404);
  });

  //create record
  test('create recipe', async () => {
    let res = await request.post('/recipe').send({
      name: 'Chicken Keleguin',
      servingSize: 24,
      category: 'Appetizer',
    });

    expect(res.status).toEqual(200);
    expect(res.body.name).toEqual('Chicken Keleguin');
    expect(res.body.servingSize).toEqual(24);
  });

  //list of records
  test('Get all recipes', async () => {
    let res = await request.get('/recipe');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expect.arrayContaining(res.body));
  });

  //read a record
  test('Get Recipe by ID', async () => {
    let res = await request.get('/recipe/1');
    expect(res.status).toEqual(200);
    expect(res.body[0].name).toEqual('Chicken Keleguin');
    expect(res.body[0].servingSize).toEqual(24);
    expect(res.body[0].category).toEqual('Appetizer');
  });

});
