const os = require('os');
const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();


app.use(express.json()); // para poder parsear JSON

app.use(cors({
  origin: 'https://www.clinicanaturlich.com'
}));

app.post('/mi-endpoint', (req, res) => {
  console.log(req.body); // imprime lo que se envió en la petición
  res.status(200).send('Recibido');
});

app.listen(3000, () => {
  console.log(`Servidor corriendo en ${os.hostname()}:3000`);
});