var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
app.use(cors());
const port = process.env.PORT || 5000;

var Router = require("./routers/routers");

app.use('/', Router);

app.listen(port, function () {
    console.log("Server is running 5000");
});