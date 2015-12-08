var express = require("express");
var app = express();
var objData = require("./objData");

app.use(express.static(__dirname + "/../client"));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
console.log(objData);
app.get("/main",function(request, reponse){
  reponse.send(objData);
});

var server = app.listen(3000, function(){
var host = server.address().address;
var port = server.address().port;

  console.log("listening to localhost", host, port);
});