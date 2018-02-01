var friends = require("../data/friends.js");

module.exports = function (app) {

    // Route to display JSON of all possible friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // Route to handle incoming survey results & compatability logic
    // app.post("/api/friends", function (req, res) {

    // });

    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
};