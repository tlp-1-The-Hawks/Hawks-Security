const express = require('express');
const app = express();

require('dotenv').config();
port = process.env.PORT || 3000;

app.listen(port, console.log(`Servidor corriendo en ${port}`));
