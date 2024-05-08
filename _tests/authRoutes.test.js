const request = require('supertest');
const app = require('../src/server');

describe('Authentication Routes', () => {
  test('POST /signup should create a new user and return user info with token', async () => {
    const newUser = {
      username: 'testuser',
      password: 'testpassword'
    };

    const response = await request(app)
      .post('/signup')
      .send(newUser);
    
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('user');
    expect(response.body).toHaveProperty('token');
  });

  test('POST /signin with basic authentication should log in user and return user info with token', async () => {
    const userCredentials = {
      username: 'testuser',
      password: 'testpassword'
    };

    const response = await request(app)
      .post('/signin')
      .auth(userCredentials.username, userCredentials.password);
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('user');
    expect(response.body).toHaveProperty('token');
  });
});
