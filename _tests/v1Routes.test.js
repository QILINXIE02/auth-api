const request = require('supertest');
const app = require('../src/server');

describe('V1 Routes', () => {
  it('POST /api/v1/:model should add an item to the DB and return added item', async () => {
    // Write your test for POST /api/v1/:model here
  });

  it('GET /api/v1/:model should return a list of :model items', async () => {
    // Write your test for GET /api/v1/:model here
  });

  it('GET /api/v1/:model/ID should return a single item by ID', async () => {
    // Write your test for GET /api/v1/:model/ID here
  });

  it('PUT /api/v1/:model/ID should return a single, updated item by ID', async () => {
    // Write your test for PUT /api/v1/:model/ID here
  });

  it('DELETE /api/v1/:model/ID should return an empty object', async () => {
    // Write your test for DELETE /api/v1/:model/ID here
  });
});
