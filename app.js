var express = require('express');

var app = express();

app.get('/', function(req, res){
  console.log(req);
  res.end('Hello Express');
});

app.get('/quote', function(req, res){
  console.log(__dirname)
  res.sendFile(__dirname+'/quote.html');
});

var server=app.listen(4001,function(req,res){
    console.log("Catch the action at http://localhost:4000");
});
