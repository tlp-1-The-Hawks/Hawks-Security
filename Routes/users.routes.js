const express = require ('express')
// import { Router } from "express";
const cuentas = express.Router();
cuentas.use(express.json)
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
  });
  app.get('/inicio', (req, res) => {
    res.sendFile(__dirname +'/Html/inicio.html');
  });
  app.use(express.static(__dirname));
  