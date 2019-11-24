var express = require("express");
var express = require("express");
var app = express();
app.use(express.static('public'))

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
