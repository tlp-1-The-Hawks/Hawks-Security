const express = require('express');
const router = express.Router();
const { renderInicio, renderListado, renderSoporte } = require('../controllers/users.controllers');

//Rutas para renderizar las vistas de usuario

//Rutas del inicio
router.get('/inicio', renderInicio);

// listado
router.get('/listado', renderListado);

// Soporte
router.get('/soporte', renderSoporte);

module.exports = router;