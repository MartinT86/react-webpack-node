var express = require("express");
var app     = express();
var path    = require("path");

var port = process.env.PORT || 3000;

app.use('/static', express.static(__dirname + '/src/client/public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/src/client/index.html'));
});

app.listen(port);