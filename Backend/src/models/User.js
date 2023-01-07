// constando módulo mongoose
const mongoose = require('mongoose');

// criando uma schema com as informações dos user
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true

    },

    password:{
        type: String,
        require: true
    },
    status: {
        type: String,
        required: true
    },
    files: {
        type: Array,
        required: true

    },

});

// criando modelo
const User = mongoose.model('User', UserSchema);

// exportando modelo
module.exports = User;