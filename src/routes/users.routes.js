const express = require('express');
const router = express.Router();
const { crearUsuario } = require('../controllers/users.controllers');

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





module.exports = router;
