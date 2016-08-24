var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.json({
        name: 'Kim Gordon',
        instrument: 'Bass'
    });
});

app.get('/user/:firstname/:lastname', function(request, response) {
  var first = request.params.firstname;
  var last = request.params.lastname;
  response.send(["Hello", first, last].join(" "));
});

app.get('/jedi/:firstname/:lastname', function(request, response) {
  var first = request.params.firstname;
  var last = request.params.lastname;
  response.send("Hello " + last.slice(0,2) + first.slice(0,3));
});

app.get('/headers/:header', function(request, response) {
  var header = request.params.header;
  // headerInfo.url = request.url;
  // headerInfo.hostname = request.hostname;
  response.json(request[header]);
});

app.listen(8080);
