const express = require('express');
const router = express.Router();
const { renderinicioSesion, renderregistro, renderrestablecer, renderCodigo, rendernuevaContra } = require('../controllers/users.controllers');

//Rutas para renderizar las vistas de usuario

//Inicio de sesion y registro
router.get('/', renderinicioSesion);

router.get('/registro', renderregistro);

//Restablecer contraseña

router.get('/restablecer', renderrestablecer);

router.get('/restablecer/codigo', renderCodigo);

router.get('/restablecer/contrasenia', rendernuevaContra);



// Obtener todas las reservas
router.get('/api',);

// Crear una reserva
router.post('/api',);

//obtener una reserva
router.get('/api/:id',)

// Actualizar una reserva
router.put('/api/:id',);

// Eliminar una reserva de forma lógica
router.delete('/api/:id',);



module.exports = router;
