const zelRates = require('../services/zelRates');
const log = require('../lib/log');

exports.list = (req, res, next) => {
  log.debug('Pulling ZEL Rate information from APIs');
  zelRates.getAll().then((rates) => {
    res.json(rates);
  }).catch(next);
};
