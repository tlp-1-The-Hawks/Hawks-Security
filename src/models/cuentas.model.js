const {sequelize, DataTypes} = require('../../db');

const Cuentas = sequelize.define(
  'UsuarioCuentas',
  {
    tipoCuenta: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
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
    // Other model options go here
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'usuarios',
  }
);

// Crear tabla si no existe
Cuentas.sync();

module.exports = Cuentas;
