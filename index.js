const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.json()); // para poder parsear JSON

app.post('/mi-endpoint', (req, res) => {
  console.log(req.body); // imprime lo que se envió en la petición
  res.status(200).send('Recibido');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});