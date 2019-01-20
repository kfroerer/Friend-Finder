var friends = require("../data/friends.js");
var router = require("express").Router();

router.get("/api/friends", function (request, response) {
    response.json(friends);
});

router.post("/api/friends", function (request, response) {
    function findDiff(friend1, friend2) {
        var diff = 0;
        console.log("start of diff", friend1, friend2);
        for ( var i = 0; i < friend1.length; i++) {
            var difference = Math.abs(friend1[i] - friend2[i]);
            
            diff = diff + difference;
        };
        console.log(diff);
        return diff;
    };
    
    function findCloseFriend(newFriend) {
        // find diff
        console.log("find close friend", newFriend);
        friend = friends[0].name; // default
        var minDiff = findDiff(newFriend.scores, friends[0].scores);
        for (var i = 1; i < friends.length; i++) {
            var newMinDiff = findDiff(newFriend.scores, friends[i].scores);
            if (newMinDiff < minDiff) {
                minDiff = newMinDiff;
                friend = friends[i].name;
            };
        };
        console.log("close match", friend);
        return friend;
    };
    var closeFriend = findCloseFriend(request.body);
    console.log("return closest friend", closeFriend);
    response.json(closeFriend); 
    friends.push(request.body);
});


module.exports = router;