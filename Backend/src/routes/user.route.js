// constando rota do express e arquivo controller
const  express  = require('express');
const userController = require('../controllers/user.controller.js');

// criando rota
const route = express.Router();

// criando as rotas que retornam, contam e criam um user, respectivamente
route.get('/', userController.getAll);
route.get('/countDocuments', userController.countDocuments);
route.post('/', userController.create);

// exportando rota
module.exports = route;