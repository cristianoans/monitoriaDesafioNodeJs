const usuarios = require('./routes/usuarios');
const express = require('express');
const app = express();

app.use(express.json()); // garante que nossa aplicacao recebera arquivos json no corpo.
app.use('/usuarios', usuarios);
app.listen(3000); // listen on port 3000