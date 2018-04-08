var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

app.set("views", path.join(__dirname, "Templates"));
app.set("view engine", "ejs");

app.use(require("./Routes/index"));

app.use(express.static(path.join(__dirname, "Client")));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), function(){
    console.log("NodeJs server running on port: " + app.get("port"));
});
