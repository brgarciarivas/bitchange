var bookshelf = require('../bookshelf');

var Account = bookshelf.Model.extend({
    tableName: 'accounts',

    goal: function() {
        return this.hasOne('Goal');
    },

    user: function() {
        return this.belongsTo('User');
    }
});

module.exports = Account;
