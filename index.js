var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.json({
        name: 'Kim Gordon',
        instrument: 'Bass'
    });
});

app.listen(8080);
