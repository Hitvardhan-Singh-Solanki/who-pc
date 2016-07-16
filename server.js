var express = require('express');
var app = express();
var hostname = 'localhost';
var port = 3000;
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.get('/getmyinfo',function(req,res){
    var info = {
      ipaddress : req.headers['x-forwarded-for'] ||
       req.connection.remoteAddress ||
       req.socket.remoteAddress ||
       req.connection.socket.remoteAddress,
      language : req.headers["accept-language"].split(",")[0],
      software: req.headers["user-agent"].split("(")[1].split(")")[0]
    };
    res.json(info);
});

app.listen(port, hostname,function(){
  console.log("Listening on port: " + port);
});
