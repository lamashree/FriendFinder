var friendData = require("../data/friends.js");

module.exports = function(app) {
   app.get("/api/friends", function(req, res) {
      res.json(friendData);
      // console.log(friendData);
    });
  
    app.post("/api/friends", function(req, res) {

		// console.log('userInput = ' + JSON.stringify(userInput));

		// console.log('userResponses = ' + userResponses);

		// Compute best friend match
		var match = {
			name: '',
			photo: '',
			totalDifference: Infinity
		}

		var userInput = req.body;
		var userScore = userInput.scores;

		var difference;
 // Make the initial value big for comparison

		// Examine all existing friends in the list
		for (var i = 0; i < friendData.length; i++) {
			// console.log('friend = ' + JSON.stringify(friends[i]));

			// Compute differenes for each question
			var current = friendData[i];
			difference = 0;
			console.log(current.name)
			for (var j = 0; j < current.scores.length; j++) {
				var currentScore = current.scores[j];
				var currentUserScore = userScore[j];

				difference += Math.abs(parseInt(currentUserScore) - parseInt(currentScore));
			}
			// console.log('diff = ' + diff);

			// If lowest difference, record the friend match
			if (difference <= match.totalDifference) {
				// console.log('Closest match found = ' + diff);
				// console.log('Friend name = ' + friends[i].name);
				// console.log('Friend image = ' + friends[i].photo);

				match.name = current.name;
				match.photo = current.photo;
				match.totalDifference = difference;
			}
		}

		// Add new user
		friendData.push(userInput);

		// Send appropriate response
		res.json(match);
	});
};
