const usuarioCtrl = {};
const { render } = require('ejs');
const Usuario = require('../models/users.model')

//Renders 
usuarioCtrl.renderinicioSesion = (req, res) => {
    res.render('Usuario/login')
}

usuarioCtrl.renderregistro = (req, res) => {
    res.render('Usuario/register')
}

usuarioCtrl.renderrestablecer = (req, res) => {
    res.render('Usuario/restablecer/restablecimiento')
};

usuarioCtrl.renderCodigo = (req, res) => {
    res.render('Usuario/restablecer/codigousuario')
};

usuarioCtrl.rendernuevaContra = (req, res) => {
    res.render('Usuario/restablecer/nuevacontrasenia')
};


//Renders home
usuarioCtrl.renderInicio = (req, res) => {
    res.render('inicio/inicio')
};

usuarioCtrl.renderListado = (req, res) => {
    res.render('inicio/listado')
};

usuarioCtrl.renderSoporte = (req, res) => {
    res.render('inicio/soporte')
};

//Controladores para iniciar sesion para el suaurio
usuarioCtrl.CrearUsuario = async (req, res) => {
    const {
        nombre,
        apellido,
        email,
        password,
    } = req.body

    try {
        const Nuevousuario = new Usuario({
            nombre,
            apellido,
            email,
            password
        });
        await Nuevousuario.save();

        return res.status(201).json({
            message: 'Usuario creado con exito'
        })
    } catch (error) {
        console.log("error al crear usuario", error)
        return res.status(500).json({
            message: 'Error al crear usuario'
        })
    }
}


module.exports = usuarioCtrl;