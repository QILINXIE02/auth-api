const request = require('supertest');
const app = require('../src/server');

describe('V2 Routes', () => {
  it('POST /api/v2/:model with a bearer token that has create permissions should add an item to the DB and return added item', async () => {
    // Write your test for POST /api/v2/:model here
  });

  it('GET /api/v2/:model with a bearer token that has read permissions should return a list of :model items', async () => {
    // Write your test for GET /api/v2/:model here
  });

  it('GET /api/v2/:model/ID with a bearer token that has read permissions should return a single item by ID', async () => {
    // Write your test for GET /api/v2/:model/ID here
  });

  it('PUT /api/v2/:model/ID with a bearer token that has update permissions should return a single, updated item by ID', async () => {
    // Write your test for PUT /api/v2/:model/ID here
  });

  it('DELETE /api/v2/:model/ID with a bearer token that has delete permissions should return an empty object', async () => {
    // Write your test for DELETE /api/v2/:model/ID here
  });
});
