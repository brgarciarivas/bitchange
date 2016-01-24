var express = require('express');
var app = express();
var coinbase = require('coinbase');
var settings = require('./config/settings');
var moment = require('moment');
var _ = require('underscore');


var client = new coinbase.Client({
    'apiKey': settings.API_KEY,
    'apiSecret': settings.API_SECRET,
    'baseApiUri': 'https://api.sandbox.coinbase.com/v2/',
    'tokenUri': 'https://api.sandbox.coinbase.com/oauth/token'
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/getBalance', function (req, res) {
    client.getAccount('primary', function (err, account) {
        var balanceObject = {
            amount: account.balance.amount,
            currency: account.balance.currency,
            name: account.name
        };

        res.send(balanceObject);
    });
});

app.get('/getAccount', function (req, res) {
    client.getAccount('primary', function (err, account) {
        var primaryAccount = {
            name: account.name,
            balance: account.balance.amount,
            currency: account.currency,
            native_balance: account.native_balance.amount,
            native_balance_currency: account.native_balance_currency,
            email: account
        };

        res.send(primaryAccount);
    });
});

app.get('/getUser', function (req, res) {
    client.getCurrentUser(function(err, user){
        var current_user = {
            email: user.email,
            name: user.name
        };

        res.send(current_user);
    });
});

app.get('/getTransactions', function (req, res) {
    var responseObject = {};
    responseObject.transactions = [];
    client.getAccount('primary', function(err, account) {
        account.getTransactions(null, function(err, txs) {
            responseObject = {
                transactions: txs
            };

            res.send(responseObject);
        });
    });
});

app.get('/getAddress', function (req, res) {
    var primaryAccount = client.getAccount('primary', function (err, account) {
        account.createAddress(null, function (err, address) {
            res.send(address.address);
        });
    });
});

app.get('/getLastLogin', function (req, res) {
    console.log("Looking for login.");
    res.send("Here's the last time you were here.");
});

var port = process.env.PORT || 3000;

app.listen(port, function (req, res) {
    console.log('Server is running on port ' + port);
});
