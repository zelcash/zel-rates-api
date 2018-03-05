const request = require('request-promise-native');

const zelRates = {
  getAll() {
    return Promise.all([
      request({ uri: 'https://graviex.net/api/v2/tickers/zelbtc', json: true, strictSSL: false }),
      request({ uri: 'https://bitpay.com/api/rates', json: true }),
    ]).then((results) => {
      const cmcData = results[0]; // results from stock exchange
      const bitpayData = results[1]; // results from bitpay
      const zelBtcExchangeRate = cmcData.ticker.last;
      const rates = [];

      bitpayData.forEach((value) => {
        const exchangeRate = zelBtcExchangeRate * value.rate;
        rates.push({ code: value.code, name: value.name, rate: exchangeRate });
      });

      return rates;
    });
  },
};

module.exports = zelRates;
