const express = require('express');
const router = express.Router();

//Rutas para renderizar las vistas de usuario

// Pagina de inicio

router.get('/inicio', (req, res) => {
  res.render('/inicio/inicio');
});

// listado
router.get('/listado', (req, res) => {
  res.render('inicio/listado');
});

// Soporte
router.get('/Soporte', (req, res) => {
  res.render('inicio/soporte');
});
module.exports = router;
