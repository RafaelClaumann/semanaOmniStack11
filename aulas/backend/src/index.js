const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());  // Aplicação aceita objetos no formato JSON

app.use(routes);

app.listen(3333);
