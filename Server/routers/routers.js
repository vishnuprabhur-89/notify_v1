var express = require("express");
var Router = express.Router();
var Events = require("../controller/controller");

Router.get('/access/data', Events.Access_Data);
module.exports = Router;