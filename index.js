const os = require('os');
const express = require('express');
const { resolve } = require('path');
const cors = require('cors');
const { getAgentInfo } = require('./services/getAgentInfo.service');

const app = express();


app.use(express.json()); // para poder parsear JSON

app.use(cors({
  origin: 'https://www.clinicanaturlich.com'
}));

app.get('/',  (req,res)=> {
  getAgentInfo().then(data=> {
    const agent = data
    res.status(200).send(`value received to post use this path after url: /mi-endpoint | you will be attended by: <strong>${agent.name}<strong>`)
  })
})

app.post('/mi-endpoint', async (req, res) => {
  console.log(req.body); // imprime lo que se envió en la petición
  getAgentInfo().then(data=> {
    const agent = data
    res.status(200).json({ 
      message: 'Message received from  Nexton API',
      ok: true, // indica que la operación fue exitosa
      status: 'success',
      data: req.body, // devolver el cuerpo de la petición como datos de la respuesta
      agent: agent,
      message: 'Datos recibidos correctamente'
    });
  })
  
});

app.listen(3000, () => {
  console.log(`Servidor corriendo en ${os.hostname()}:3000`);
});