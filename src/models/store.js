'use strict';

const storeModel = (sequelize, DataTypes) => sequelize.define('store', {
  name: { type: DataTypes.STRING, required: true },
  colors: { type: DataTypes.STRING, required: true },
  image: { type: DataTypes.STRING, required: true }
});

module.exports = storeModel;
