var bookshelf = require('../bookshelf');

var Vendor = bookshelf.Model.extend({
    tableName: 'vendors'
});

module.exports = Vendor;
