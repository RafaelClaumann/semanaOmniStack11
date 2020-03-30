const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

const ongsValidate = require('./validators/ongs.validator');
const incidentsValidate = require('./validators/incidents.validator');
const profileValidate = require('./validators/profile.validator')
const sessionValidate = require('./validators/session.validator')

routes.post('/session', sessionValidate.body(), sessionController.create);
routes.get('/profile', profileValidate.header(), profileController.index);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongsValidate.body(), ongController.create);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentsValidate.header(),
    incidentsValidate.body(), incidentController.create);
routes.delete('/incidents/:id', incidentsValidate.header(),
    incidentsValidate.routeParam(), incidentController.delete);

module.exports = routes;
