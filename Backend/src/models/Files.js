// constando módulo mongoose
const mongoose = require('mongoose');

// criando uma schema com as informações das files
const FilesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        default: 'Novo File'
    },
    type:{
        type: String,
        required: false
    },
    what:{
        type: String,
        required: false
    },
    applay:{
        type: String,
        required: false
    },
    size:{
        type: String,
        required: false
    },
    deadline:{
        type: String,
        required: false
    },
    obs:{
        type: String,
        required: false,
        default:"none"
    }
});

// criando modelo
const Files = mongoose.model('Files', FilesSchema);

// exportando modelo
module.exports = Files;