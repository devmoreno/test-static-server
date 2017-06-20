'use strict';

//Dependencies
var express = require('express');
var routes = require('./routes');
var config = require('./config');
var app = express();

//Config
config.registerAll(app);
//Register Routes
routes.registerAll(app);

//Start Server
app.listen(process.env.PORT||8090, function () {
  console.log('Nodejs Server is Running on http://localhost:8080!')
})
