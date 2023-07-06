const express = require('express');
const router = express.Router();
const { renderinicioSesion, renderregistro, renderrestablecer, renderCodigo, rendernuevaContra, CrearUsuario, IniciarSesion } = require('../controllers/users.controllers');

//Rutas para renderizar las vistas de usuario

//Inicio de sesion y registro
router.get('/', renderinicioSesion);

router.get('/registro', renderregistro);

//Restablecer contraseña

router.get('/restablecer', renderrestablecer);

router.get('/restablecer/codigo', renderCodigo);

router.get('/restablecer/contrasenia', rendernuevaContra);



// obtener cuentas
router.get('/api',);

// crear cuenta
router.post('/api', CrearUsuario);

//Iniciar sesion
router.post('/iniciar-sesion/', IniciarSesion);

//obtener una cuenta
router.get('/api/:id',)

// actualizar cuenta
router.put('/api/:id',);

// Eliminar una cuenta de forma lógica
router.delete('/api/:id',);



module.exports = router;
