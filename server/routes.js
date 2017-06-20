/**
 * Main application routes
 */

'use strict';

var routes = {

    registerAll: function(app){

        //Default Route
        app.get('/', function(req, res) {
            res.send("index.html");
        });

        app.use('/rest/alerts', require('./app/integration'));

        //Rest Api
        app.use('/api/things', require('./app/things')); //example rest api

        app.use("/aws/test",function(req,res){
            // Load the SDK for JavaScript
            var AWS = require('aws-sdk');
        })
    }

}

module.exports = routes;