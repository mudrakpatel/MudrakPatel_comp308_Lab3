var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs('mongodb://localhost/comp308-lab3-database', ["Student"]);

router.get("/", function(request, response, next){
	//response.render("index");
	/*db.Student.find(function(error, Students){
		if(error){
			response.send(error);
		} else {
			response.send(Students);
		}
	});*/
});

module.exports = router;
