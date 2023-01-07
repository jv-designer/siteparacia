// constando modelo de tag
const Tag = require('../models/Tag.js');

// função que retorna, cria, atualiza, apaga e conta a quantidade de tags, respectivamente
const getAllService = () => Tag.find().populate('files');
const createService = (body) => Tag.create(body);
const updateService = (id, macAddress, name, files, positionX, positionY, positionZ, buzzer) => Tag.findOneAndUpdate({ _id: id }, { macAddress, name, files, positionX, positionY, positionZ, buzzer });
const eraseService = (id) => Tag.findOneAndDelete({ _id: id });
const countDocumentsService = () => Tag.countDocuments();

// exportando funções criadas acima
module.exports = {
    getAllService,
    createService,
    updateService,
    eraseService,
    countDocumentsService
}