'use strict';

const storeModel = (sequelize, DataTypes) => sequelize.define('store', {
  name: { type: DataTypes.STRING, required: true },
  categories: { type: DataTypes.STRING, required: true },
  instock: { type: DataTypes.STRING, required: true },
  price: { type: DataTypes.STRING, required: true },
  __V: { type: DataTypes.STRING, required: true }
});

module.exports = storeModel;
