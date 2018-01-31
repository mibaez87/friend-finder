var Friends = require("../data/friends.js");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var friends = [];

// Route to display JSON of all possible friends
app.get("/api/friends", function (req, res) {
    res.json(friends);
});

// Route to handle incoming survey results & compatability logic
app.post("/api/friends", function (req, res) {
    
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});