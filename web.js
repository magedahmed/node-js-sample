var express = require('express');
var fs = require('fs');
var port = process.env.PORT || 8080;

var app = express.createServer()

app.get('/', function(request, response) {
    var str = fs.readFileSync('index.html');
    str = str.toString();
    response.send(str);
    
});

app.listen(port, function() {
  console.log("Listening on " + port);
});