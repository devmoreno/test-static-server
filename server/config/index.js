'use strict';

var bodyParser = require("body-parser");
var express = require('express');

var config = {
    registerAll: function(app){

        //Enviroment Settings

        //Server Settings
        expressSettings(app);
    }
};

function expressSettings(app){
    
    //Set Static Resource Server
    app.use(express.static('client'));
    //Parse application/json in our rest api
    app.use(bodyParser.json())
}

module.exports = config;