const routes = require("express").Router();

//Rutas para renderizar las vistas de usuario

//Rutas del inicio
routes.get('/inicio', (req, res) => {
    res.render('inicio/inicio')
})
routes.get('/inicio/listado', (req, res) => {
    res.render('inicio/listado')
})
routes.get('/inicio/soporte', (req, res) => {
    res.render('inicio/soporte')
})


module.exports = routes;