var express = require('express');
var app = express();
var User = require('./models/User');
var coinbase = require('coinbase');
var settings = require('./config/settings');


var client = new coinbase.Client({
    'apiKey': settings.API_KEY,
    'apiSecret': settings.API_SECRET,
    'baseApiUri': 'https://api.sandbox.coinbase.com/v2/',
  	'tokenUri': 'https://api.sandbox.coinbase.com/oauth/token'
});

app.get('/getBalance', function (req, res) {
    console.log('Got a request!');

    res.send('Hey thanks for the request.');
});

app.get('/getAccount', function (req, res) {
		console.log("Getting account.");
		res.send("Account should be here.");
});

app.get('/getTransactions', function (req, res) {
		var responseObject = {};
		responseObject.transactions = [];
		client.getAccount('primary', function(err, account) {
				account.getTransactions(null, function(err, txs) {
						console.log(txs);
						responseObject.transactions = txs
						res.send(responseObject);
				});
		});
});

app.get('/getAddress', function (req, res) {
		console.log("The address is...");
		res.send("Here's your address.");
});

app.get('/getLastLogin', function (req, res) {
		console.log("Looking for login.");
		res.send("Here's the last time you were here.");
});

app.get('/getTransaction/:id', function (req, res) {
		console.log(req.params.id);
		res.send("The id you requested is " + req.params.id + ".");
});

app.get('/getTransaction/:account_id/amount', function (req, res) {
		client.getAccount('<ACCOUNT ID>', function(err, accounts) {
				console.log('bal: ');
		});
		console.log(req.params.account_id.amount);
		res.send("The amount you put in belongs here.")
});

var port = 3000;

app.listen(port, function (req, res) {
    console.log('Server is running on port ' + port);
});
