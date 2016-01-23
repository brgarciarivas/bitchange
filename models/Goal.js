var bookshelf = require('../bookshelf');

var Goal = bookshelf.Model.extend({
    tableName: 'goals'
});

module.exports = Goal;
