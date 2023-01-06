//const morgan = require('morgan');
const mongoose = require('mongoose');


//const path = require('path');

/* Conexão com o banco de dados 
mongoose.connect(process.env.MONGO_URL,
    {
    useNewUrlParser: true
    }
);*/


const connetcDatabase = () => {
    console.log("estabelecendo conexão com database");

    mongoose.connect(
        "mongodb+srv://root:CloudMongoCia@cluster0.5w5jbln.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true}
    ).then(() => console.log("Conexão com MongoDB establecida")).catch((error) => console.log(error));
};



module.exports = connetcDatabase;