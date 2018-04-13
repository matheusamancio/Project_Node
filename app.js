var express = require('express');
var app = express();

app.get("/",function(req,res){
  res.send("<html><body>Today's News </body></html>")
});

app.get("/tech",function(req,res){
  res.send("<html><body>Technology News </body></html>")
});

app.get("/Policy",function(req,res){
  res.send("<html><body>Policy News </body></html>")
});

app.listen(3000,function(){
  console.log("running express server");
});
