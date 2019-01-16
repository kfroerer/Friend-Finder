var express = require("express");
var path = require("path");
var app = express();
var PORT = 4000;
var routes = require('./app/routing/htmlRoutes');
var apiRoutes = require('./app/routing/apiRoutes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', routes);
require('./app/routing/apiRoutes')(app);




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });