var express = require("express");
var app     = express();
var path    = require("path");

app.set('port', (process.env.PORT || 5000));

app.use('/static', express.static(__dirname + '/src/client/public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/src/client/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});