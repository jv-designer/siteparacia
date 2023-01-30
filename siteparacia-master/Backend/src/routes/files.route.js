// constando rota do express e arquivo controller
const express = require("express");
const filesController = require("../controllers/files.controller.js");
const multer = require("multer");
const multerConfig = require("../controllers/multerConfig");

// criando rota
const route = express.Router();

// criando as rotas que retornam, contam e criam uma categoria, respectivamente

route.get("/", filesController.getAll);
route.get("/countDocuments", filesController.countDocuments);
route.post("/", filesController.create);
route.post("/file", filesController.find);

route.post("/sand", multer(multerConfig).single("file"), async (req, res) => {
  const { originalname: name, size, key } = req.file;

  const post = await Post.create({
    name,
    size,
    key,
    url: "",
  });
});

// exportando rota
module.exports = route;
