var friends = require("../data/friends.js");
var router = require("express").Router();

router.get("/api/friends", function (request, response) {
    response.json(friends);
});

router.post("/api/friends", function (request, response) {
    console.log("hi", request.body)
    friends.push(request.body);
});

module.exports = router;