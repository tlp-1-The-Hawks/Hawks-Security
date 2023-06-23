const express = require('express');
const app = express();
require('dotenv').config();
port = process.env.PORT || 3000;


//Configuracion de las rutas
app.use(require('./src/routes/inicio.routes'));
app.use(require('./src/routes/users.routes'))


require('ejs');
app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.listen(port, console.log(`Servidor corriendo en ${port}`));