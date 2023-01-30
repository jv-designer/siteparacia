// constando rota do express e arquivo controller
const express = require("express");
const userController = require("../controllers/user.controller.js");

// criando rota
const route = express.Router();

// criando as rotas que retornam, contam e criam um user, respectivamente
route.get("/", userController.getAll);
route.post("/access", userController.getOne);
route.get("/countDocuments", userController.countDocuments);
route.post("/", userController.create);
route.post("/path", userController.userUpdate);
route.post("/authenticate", userController.authenticate);

// exportando rota
module.exports = route;
