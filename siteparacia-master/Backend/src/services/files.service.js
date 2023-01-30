// constando modelo de categoria
const Files = require("../models/Files.js");

// função que cria, retorna e conta a quantidade de files, respectivamente
const createService = (body) => Files.create(body);
const getAllService = () => Files.find();
const countDocumentsService = () => Files.countDocuments();

// exportando métodos criados acima
module.exports = {
  createService,
  getAllService,
  countDocumentsService,
  Files,
};
