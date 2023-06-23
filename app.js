const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

//Configuracion de las rutas
app.use(require('./src/routes/inicio.routes'));
app.use(require('./src/routes/users.routes'));

require('ejs');
app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.listen(PORT, console.log(`Server is runing in port ${PORT}`));
