'use strict';

const todoModel = (sequelize, DataTypes) => sequelize.define('todos', {
  name: { type: DataTypes.STRING, required: true },
  item-todo: { type: DataTypes.STRING, required: true },
  difficulty: { type: DataTypes.STRING, required: true }
});

module.exports = todoModel;
