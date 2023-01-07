// constando rota do express e arquivo controller
const  express  = require('express');
const filesController = require('../controllers/files.controller.js');

// criando rota
const route = express.Router();

// criando as rotas que retornam, contam e criam uma categoria, respectivamente
route.get('/', filesController.getAll);
route.get('/countDocuments', filesController.countDocuments);
route.post('/', filesController.create);

// exportando rota
module.exports =  route;