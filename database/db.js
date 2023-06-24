const {Sequelize, Model, DataTypes} = require('sequelize');

const sequelize = new Sequelize('security-hawks', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = {
  sequelize,
  DataTypes,
  Model,
};
