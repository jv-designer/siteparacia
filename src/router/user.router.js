const route = require('express').Router();
const userControler = require('../controller/user.controller');

route.post("/",userControler.create);

module.exports = route;