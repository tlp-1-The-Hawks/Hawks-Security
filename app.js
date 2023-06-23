const express = require('express');
const app = express();

require('dotenv').config();
PUERTO = process.env.PORT || 3000;

app.get('/inicio', (req, res) => {
  res.sendFile(__dirname + '/Html/inicio.html');
});
app.use(express.static(__dirname));

app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto: ${PUERTO}`);
});
