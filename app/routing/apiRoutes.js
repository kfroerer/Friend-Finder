var express = require('express');
var app = express();
var friends = require("../data/friends");



module.exports = function(app) {
    app.get("/api/friends", function(request, response) {
        return response.json(friends);
    });


    app.post("api/friends", function(request, response) {
        friends.push(request.body)
        console.log(friends);
    })
}
   

    
    // apiRoutes.POST("/api/friends", function(request, response) {
    //         // req.body hosts is equal to the JSON post sent from the user
    //         // This works because of our body parsing middleware
    //         var newFriend = request.body;
    //         console.log(newFriend);
          
    //         friends.push(newFriend);
          
    //         response.json(friends);
    // });
  


