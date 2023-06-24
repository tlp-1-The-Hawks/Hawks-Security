'use strict';
const {sequelize, DataTypes} = require('../../database/db');

const Cuentas = sequelize.define(
  'usuarioCuentas',
  {
    tipoCuenta: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: {
        args: true,
        messge: 'El email ya existe',
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    paranoid: true,
    modelName: 'Reserva',
    tableName: 'reservas',
    underscored: true,
  }
);

// Crear tabla si no existe
Cuentas.sync();

module.exports = Cuentas;
