const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Se importa la instancia de conexión a la base de datos - (debe ser después de leer las variables de entorno)
const {sequelize} = require('./db');

// Se ejecuta una instancia de conexión a la base de datos
sequelize
  .authenticate()
  .then(() => console.log('Conexión a base de datos exitosa'))
  .catch((error) => console.log('Error al conectar a base de datos', error));

//Configuracion de las rutas
app.use(require('./src/routes/inicio.routes'));
app.use(require('./src/routes/users.routes'));

require('ejs');
app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.listen(PORT, console.log(`Server is runing in port ${PORT}`));
