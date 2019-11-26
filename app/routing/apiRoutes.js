var friendData = require("../data/friends.js");

module.exports = function(app) {
   app.get("/api/friends", function(req, res) {
      res.json(friendData);
      // console.log(friendData);
    });
  
    app.post("/api/friends", function(req, res) {

      var userInput = req.body;
		// console.log('userInput = ' + JSON.stringify(userInput));

		var userResponses = userInput.preferences;
		// console.log('userResponses = ' + userResponses);

		// Compute best friend match
		var matchName = '';
		var matchImage = '';
		var totalDifference = 20; // Make the initial value big for comparison

		// Examine all existing friends in the list
		for (var i = 0; i < friendData.length; i++) {
			// console.log('friend = ' + JSON.stringify(friends[i]));

			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friendData[i].score[j] - userResponses[j]);
			}
			// console.log('diff = ' + diff);

			// If lowest difference, record the friend match
			if (diff < totalDifference && diff < totalDifference) {
				// console.log('Closest match found = ' + diff);
				// console.log('Friend name = ' + friends[i].name);
				// console.log('Friend image = ' + friends[i].photo);

				totalDifference = diff;
				matchName = friendData[i].name;
				matchImage = friendData[i].photo;
			}
		}

		// Add new user
		friendData.push(userInput);

		// Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};
