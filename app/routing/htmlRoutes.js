var path = require("path");
var router = require("express").Router();

router.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/survey", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = router;



