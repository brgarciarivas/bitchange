var bookshelf = require('../bookshelf');

var Goal = require('./Goal');

var Venue = bookshelf.Model.extend({
    tableName: 'venues',

    goals: function () {
        return this.belongsToMany(Goal, 'venues_to_goals', 'venue_id', 'goal_id');
    }
});

module.exports = Venue;
