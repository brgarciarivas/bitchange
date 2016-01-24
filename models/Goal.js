var bookshelf = require('../bookshelf');

var Goal = bookshelf.Model.extend({
    tableName: 'goals',

    account: function () {
        return this.belongsTo('Account');
    }
});

module.exports = Goal;
