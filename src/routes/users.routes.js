const express = require('express');
const router = express.Router();

//Rutas para renderizar las vistas de usuario

//Inicio de sesion y registro
router.get('/', (req, res) => {
  res.render('usuario/login');
});

router.get('/registro', (req, res) => {
  res.render('usuario/register');
});

//Restablecer contraseña

router.get('/restablecer', (req, res) => {
  res.render('usuario/restablecer/restablecimiento');
});
router.get('/restablecer/codigo', (req, res) => {
  res.render('usuario/restablecer/condigousuario');
});
router.get('/restablecer/contrasenia', (req, res) => {
  res.render('usuario/restablecer/nuevacontrasenia');
});

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
