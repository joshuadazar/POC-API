const os = require('os');
const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();


app.use(express.json()); // para poder parsear JSON

app.use(cors({
  origin: 'https://www.clinicanaturlich.com'
}));

app.get('/', (req,res)=> {
  res.send('value received to post use this path after url: /mi-endpoint')
})

app.post('/mi-endpoint', (req, res) => {
  console.log(req.body); // imprime lo que se envió en la petición
  res.status(200).json({ 
    message: 'Message received from  Nexton API',
    ok: true, // indica que la operación fue exitosa
    status: 'success',
    data: req.body, // devolver el cuerpo de la petición como datos de la respuesta
    message: 'Datos recibidos correctamente'
  });
});

app.listen(3000, () => {
  console.log(`Servidor corriendo en ${os.hostname()}:3000`);
});