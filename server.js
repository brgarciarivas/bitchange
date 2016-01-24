var express = require('express');
var app = express();
var coinbase = require('coinbase');
var settings = require('./config/settings');
var moment = require('moment');
var _ = require('underscore');
// var Vendor = require('./models/Vendor')


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
        new Vendor()
        .fetchAll()
        .then ( function (vendors) {
                res.send(vendors.toJSON());
        });
});

// app.get('/payRequest', function (req, res) {
//     client.getAccounts({}, function (err, accounts) {
//         var sellerAccount = accounts[0];
//         var customerAccount = accounts[1];
//
//         console.log('==customer account==');
//         console.log(customerAccount.balance.amount);
//
//         customerAccount.createAddress(null, function (err, address) {
//             console.log('Created new customer address to use:');
//             console.log(address.address);
//
//             console.log('Initiating payment...');
//             var args = {
//                 "to": address.address,
//                 "amount": "0.001930",
//                 "currency": "BTC",
//                 "description": "BitChange"
//             };
//
//             sellerAccount.sendMoney(args, function (err, txn) {
//                 if (err) {
//                     console.log('==ERROROROROROROROROROROROR==');
//                     console.log(err);
//                 }
//                 console.log('Transaction created:');
//                 console.log(txn);
//
//                 console.log('==customer account after txn created==');
//                 console.log(customerAccount);
//
//                 res.send(txn);
//             });
//         });
//     });
// });

app.get('/getAddress', function (req, res) {
    var primaryAccount = client.getAccount('primary', function (err, account) {
        account.createAddress(null, function (err, address) {
            res.send(address.address);
        });
    });
});

var port = process.env.PORT || 3000;

app.listen(port, function (req, res) {
    console.log('Server is running on port ' + port);
});
