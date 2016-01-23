var express = require('express');
var app = express();
var User = require('./models/User');

app.get('/getBalance', function (req, res) {
    console.log('Got a request!');

    res.send('Hey thanks for the request.');
});

var port = 3000;

app.listen(port, function (req, res) {
    console.log('Server is running on port ' + port);
});
