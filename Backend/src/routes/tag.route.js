// constando rota do express e arquivo controller
const express =  require('express');
const tagController =  require('../controllers/tag.controller.js');

// criando rota
const route = express.Router();

// criando as rotas que retornam, contam, criam, atualizam e apagam uma tag, respectivamente
route.get('/', tagController.getAll);
route.get('/countDocuments', tagController.countDocuments);
route.post('/', tagController.create);
route.patch('/', tagController.update);
route.delete('/:id', tagController.erase);

// exportando rota
module.exports =  route;