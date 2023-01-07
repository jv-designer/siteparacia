// constando model do user
const User = require('../models/User.js');

// função que cria, retorna e conta a quantidade de user, respectivamente
const createService = (body) => User.create(body);
const getAllService = () => User.find();
const countDocumentsService = () => User.countDocuments();

// exportando funções criadas acima
module.exports = {
    createService,
    getAllService,
    countDocumentsService
}
