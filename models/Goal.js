var bookshelf = require('../bookshelf');

var Goal = bookshelf.Model.extend({
    tableName: 'goals',

    account: function () {
        return this.belongsTo('Account');
    },

    venues: function () {
        return this.belongsToMany('Venue', 'venues_to_goals', 'goal_id', 'venue_id');
    }
});

module.exports = Goal;
