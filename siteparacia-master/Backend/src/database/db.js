// constando módulo mongoose
const mongoose = require("mongoose");
let senha = MD_RAIZ + ":" + MD_SENHA;
// função que conecta com o banco de dados

function connetcDatabase() {
  console.log("estabelecendo conexão com database");

  mongoose
    .connect(
      `mongodb+srv://${senha}@cluster0.5w5jbln.mongodb.net/?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Conexão com MongoDB establecida"))
    .catch((error) => console.log(error));
}

// exportando função criada acima
module.exports = {
  connetcDatabase,
};
