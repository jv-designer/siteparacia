// constando módulos utilizados na aplicação
const express = require("express");
const db = require("./src/database/db.js");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const bodyParser = require("body-parser");

// constando arquivos de rotas
//const adm = require('./src/routes/adm.route.js');
const filesRoute = require("./src/routes/files.route.js");
const userRoute = require("./src/routes/user.route.js");

// configurando dotenv
dotenv.config();

// criando servidor e inicializando sua porta
const app = express();
const PORT = 3000 || process.env.PORT;

// conectando com o banco de dados
db.connetcDatabase();

// usando middlewares e rotas
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use('/tag', tagRoute);
app.use("/files", filesRoute);
app.use("/user", userRoute);

// servindo arquivos estáticos
app.use(express.static("uploads"));

// inicializando servidor em sua respectiva porta
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
