const btczRates = require('../services/btczRates');
const log = require('../lib/log');

exports.list = (req, res, next) => {
  log.debug('Pulling BTCZ Rate information from APIs');
  btczRates.getAll().then((rates) => {
    res.json(rates);
  }).catch(next);
};
