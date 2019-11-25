var friendData = require("../data/friends.js");
module.exports = function(app) {
   app.get("/api/friends", function(req, res) {
      res.json(friendData);
      // console.log(friendData);
    });
  
    app.post("/api/friends", function(req, res) {
var totalDifference = 0;
var bestMatch = {
   name: "",
   photo: "",
   friendDifference: 100
}


   });
};