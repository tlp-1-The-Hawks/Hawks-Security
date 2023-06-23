const routes = require("express").Router();

//Rutas para renderizar las vistas de usuario

//Inicio de sesion y registro
routes.get('/iniciodesesion', (req, res) => {
    res.render('usuario/iniciodesesion')
})
routes.get('/registro', (req, res) => {
    res.render('usuario/register')
})
routes.get('/', (req, res) => {
    res.render('usuario/register')
})

//Restablecer contraseña

routes.get('/restablecer', (req, res) => {
    res.render('usuario/restablecer-contraseña/restablecimiento')
})
routes.get('/restablecer/codigo', (req, res) => {
    res.render('usuario/restablecer-contraseña/condigousuario')
})
routes.get('/restablecer/contrasenia', (req, res) => {
    res.render('usuario/restablecer-contraseña/nuevacontra')
})
module.exports = routes;