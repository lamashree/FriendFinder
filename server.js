var express = require("express");
// var bodyParser = require('body-parser');
// var path = require('path');
var app = express();
app.use(express.static(__dirname + '/public'));
// app.use(express.static('public'))
// app.use('/css',express.static(__dirname +'/css'));
// var friends = require('./app/data/friends.js');

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require(( './app/routing/apiRoutes'))(app);
require(( './app/routing/htmlRoutes'))(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
