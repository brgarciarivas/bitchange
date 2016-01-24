var express = require('express');
var app = express();
var coinbase = require('coinbase');
var settings = require('./config/settings');
var moment = require('moment');
var _ = require('underscore');
var Vendor = require('./models/Vendor')
var Venue = require('./models/Venue');

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
            balance: account.balance.amount,
            native_balance: (parseFloat(account.balance.amount) * 388.4).toString(),
            currency: account.balance.currency,
            native_currency: 'USD'
        };

        res.send(balanceObject);
    });
});

app.get('/getVendors', function (req, res) {
    var goalType = req.query.goal;
    console.log('Looking for goal ' + goalType);

    client.getAccount('primary', function (err, account) {
        var minBalance = account.balance.amount;
        console.log('Min balance');
        console.log(minBalance);

        new Venue().where('price', '<', minBalance)
            .fetchAll({
                withRelated: ['goals']
            })
            .then( function (venues) {
                var matchingGenres = _.filter(venues.models, function (venue) {
                    var goalArray = venue.related('goals').toJSON();
                    return (_.pluck(goalArray, 'name').indexOf(goalType) > -1);
                });

                if (matchingGenres.length > 0) {
                    res.send({
                        status: true,
                        vendors: matchingGenres
                    });
                } else {
                    new Vendor()
                    .fetchAll()
                    .then ( function (vendors) {
                        res.send({
                            status: false,
                            vendors: vendors.toJSON()
                        });
                    });
                }
            });
    });
});

app.get('/getAddress', function (req, res) {
    var primaryAccount = client.getAccount('primary', function (err, account) {
        account.createAddress(null, function (err, address) {
            res.send({
                address: address.address
            });
        });
    });
});

var port = process.env.PORT || 3000;

app.listen(port, function (req, res) {
    console.log('Server is running on port ' + port);
});
