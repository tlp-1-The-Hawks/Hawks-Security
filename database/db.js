const { Sequelize, Model, DataTypes } = require('sequelize');


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  '', {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
});


module.exports = {
  sequelize,
  DataTypes,
  Model
};
