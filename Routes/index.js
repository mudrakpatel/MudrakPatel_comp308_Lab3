var express = require("express");
var router = express.Router();
var Student = require("../Models/Student.model.js");

router.get("/", function(request, response, next){
	//response.render("index");
});

module.exports = router;
