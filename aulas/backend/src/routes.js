const express = require('express');
const routes = express.Router();

// ilustraçao RequestBody
routes.get('/RequestBody', (req, res) => {
    // localhost:3333
    // imprime o RequestBody
    console.log(req.body);
    return res.json(req.body);
});

// ilustração QueryParams
routes.get('/QueryParam', (req, res) => {
    // localhost:3333/?nome=rafael
    // imprime o QueryParam
    console.log(req.query);  // {nome: 'rafael'}
    return res.json(req.query);
});

// ilustração RouteParams
routes.get('/RouteParam/:id', (req, res) => {
    // localhost:3333/1
    // imprime o RouteParam
    console.log(req.params);  // {id: '1'}
    return res.json(req.params);
});

module.exports = routes;
