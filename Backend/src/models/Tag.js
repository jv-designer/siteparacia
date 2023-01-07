// constando módulo mongoose
const mongoose = require('mongoose');

// criando uma schema com as informações das tags
const TagSchema = new mongoose.Schema({
    macAddress: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
        default: 'Nova Tag'
    },
    files: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: false,
        default: "639a0682a797daccce032f69"
    },
    positionX: {
        type: Number,
        required: false,
    },
    positionY: {
        type: Number,
        required: false,
    },
    positionZ: {
        type: Number,
        required: false,
    },
    buzzer: {
        type: Number,
        required: false,
        default: 0
    }
});

// criando modelo
const Tag = mongoose.model('Tag', TagSchema);

// exportando modelo
module.exports = Tag;