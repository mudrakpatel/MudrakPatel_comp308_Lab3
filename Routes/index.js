var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs('mongodb://user1:Password123@ds239009.mlab.com:39009/comp308assignment3database3', ["Student", "Course"]);

router.get("/", function(request, response, next){
	//response.render("index");
	db.Student.find(function(error, Students){
		if(error){
			response.send(error);
		} else {
			response.send(Students);
		}
	});
});

module.exports = router;
