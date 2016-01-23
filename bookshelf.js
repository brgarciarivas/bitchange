var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : 'us-cdbr-iron-east-03.cleardb.net',
    user     : 'b08eefd1a7ff14',
    password : '90d0ccb4',
    database : 'heroku_f83437d11031fae',
    charset  : 'utf8'
  }
});

module.exports = require('bookshelf')(knex);
