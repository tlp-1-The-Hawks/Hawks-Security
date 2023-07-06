const usuarioCtrl = {};
const { render } = require('ejs');
const Usuario = require('../models/users.model');
const e = require('cors');
const { crossOriginResourcePolicy } = require('helmet');

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

//controlador para registrarse
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
//controlador para iniciar sesion
usuarioCtrl.IniciarSesion = async (req, res) => {
    try {
      const { email, password } = req.body;
      const usuario = await Usuario.findOne({ where: { email } }); // Utiliza "findOne" en lugar de "findByPk" y usa "where" para especificar la condición de búsqueda
      if (!usuario) {
        return res.status(404).json({
          message: 'Usuario no encontrado'
        });
      }else {if (usuario.password !== password) { // Cambia "Usuario" a "usuario" en las verificaciones de contraseña
        return res.status(401).json({
          message: 'Contraseña incorrecta'
        } 
        )}else {
            return res.status(200).json({
              message: 'Haz iniciado sesion',
            });
          }
    
    }
    } catch (error) {
      console.log("Error al iniciar sesión", error); // Ajusta la frase de error
      return res.status(500).json({
        message: 'Error al iniciar sesión'
      });
    }
  };
  

module.exports = usuarioCtrl;