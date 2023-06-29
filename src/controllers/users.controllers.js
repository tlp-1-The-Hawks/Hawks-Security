const usuarioCtrl = {};
const Usuario = require('../models/users.model')

//Controladores para crear nuevo usuario

usuarioCtrl.crearUsuario = async (req, res) => {
    const { nombre, apellido, email, password } = req.body;

    try {
        // Se verifica si el usuario ya existe
        const existeUsuario = await Usuario.findOne({
            where: {
                email
            }
        });


        if (existeUsuario) {
            throw ({ // throw siempre debe ejecutarse dentro de un try catch
                status: 400,
                message: 'El usuario ya existe',
            })
        };

        const nuevoUsuario = new Usuario({
            username,
            email,
            password,
        });

        // Encriptar contraseña
        // const salt = await bcrypt.genSalt(10);
        // nuevoUsuario.password = await bcrypt.hash(password, salt);

        // Guardar usuario en la base de datos
        const usuarioCreado = await nuevoUsuario.save();

        if (!usuarioCreado) {
            throw ({
                message: 'Error al crear el usuario',
            })
        }

        // Se retorna la respuesta al cliente
        return res.status(201).json({
            message: 'Usuario creado exitosamente',
        });
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            message: error.message || 'Error al crear el usuario',
        });
    }
};

module.exports = usuarioCtrl;