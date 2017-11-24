const apicache = require('apicache');
const rate = require('./controllers/rate');

const cache = apicache.middleware;

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.redirect('/rates');
  });
  app.get('/rates', cache('1 hour'), rate.list);
};
