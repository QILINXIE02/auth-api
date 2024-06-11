'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const todoModel = require('./todo.js');
const foodModel = require('./food.js');
const userModel = require('./users.js');
const Collection = require('./data-collection.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL);
const food = foodModel(sequelize, DataTypes);
const todos = todoModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  food: new Collection(food),
  todos: new Collection(todos),
  users: userModel(sequelize, DataTypes),
};
