# FriendFinder
You can use this application simply clicking following link.
<https://findfriendhost.herokuapp.com/>

## Installation
Follow step below 
git clone git@github.com:angrbrd/friend-finder.git
cd friend-finder
npm install

## Overview
In this assignment, i developed the application that is a compatibility-based "FriendFinder" application basically a dating app.<br/>
There are little survey for the user. This app match best match for user based on the rating in survey question. this app compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference

## Technology use in app
* Express 
* npm 
* node.js
* Ajax 
* javaScript

## Requirements

Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
Your server.js file should require the basic npm packages we've used in class: express and path.
Your htmlRoutes.js file should include two routes:
A GET Route to /survey which should display the survey page.
A default, catch-all route that leads to home.html which displays the home page.



Your apiRoutes.js file should contain two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

{
"name":"Ahmed",
"photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
"scores":[
5,
1,
4,
4,
5,
1,
2,
5,
4,
1
]
}
Determine the user's most compatible friend using the following as a guide:

Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

Example:

User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

Total Difference: 2 + 1 + 2 = 5

 ## Output as Screenshort
Home page of the APP.
<img src="/../images/Image 12-2-19 at 5.01 PM.jpg"
alt=" home page  "/>

Result for best match.
<img src="/../images/Image 12-2-19 at 5.01 PM.jpg"
alt=" home page  "/>

