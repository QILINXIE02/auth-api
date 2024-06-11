'use strict';

const todoModel = (sequelize, DataTypes) => sequelize.define('todos', {
  name: { type: DataTypes.STRING, required: true },
  itemtodo: { type: DataTypes.STRING, required: true },
  difficulty: { type: DataTypes.STRING, required: true }
});

module.exports = todoModel;
