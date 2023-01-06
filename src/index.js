//Módulos importados para desenvolvimento
const express = require('express');
const bodyParser = require('body-parser')
const db = require('./db/index')
const userRoute = require('./router/user.router')


const app = express();


db();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.json());

//app.use("/user",userRoute);

app.listen(3001);