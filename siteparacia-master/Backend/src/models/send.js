// constando módulo mongoose
const mongoose = require("mongoose");

// criando uma schema com as informações das imagens
const SendSchma = new mongoose.Schema({
  name: String,
  size: String,
  key: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// criando modelo
const Send = mongoose.model("Sand", SendSchma);

// exportando modelo
module.exports = Send;
