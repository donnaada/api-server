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

describe('recipe route',  () =>{
  test('create recipe', async() =>{
    let res = await request.post('/recipe').send({
      name: 'Chicken Keleguin',
      servingSize: 24,
      category: 'Appetizer',
    });

    expect(res.status).toEqual(200);
    expect(res.body.name).toEqual('Chicken Keleguin');
    expect(res.body.servingSize).toEqual(24);
  });
});
