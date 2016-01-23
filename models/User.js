var bookshelf = require('../bookshelf');

var User = bookshelf.Model.extend({
    tableName: 'users',

    accounts: function() {
        return this.hasMany('Account');
    }
});

module.exports = User;
