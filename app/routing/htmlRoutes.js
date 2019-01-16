var express = require('express');
var path = require('path');

const routes = express.Router();
    routes.get("/survey", function(request, response) {
    
    response.sendFile(path.join(__dirname, "../public/survey.html"))
        });
    
    routes.get("/", function(request, response) {
    
    response.sendFile(path.join(__dirname, "../public/home.html"))
    });

module.exports = routes







