const request = require('request-promise-native');

const zelRates = {
  getAll() {
    return Promise.all([
      request({ uri: 'https://stocks.exchange/api2/ticker', json: true }),
      request({ uri: 'https://bitpay.com/api/rates', json: true }),
    ]).then((results) => {
      const cmcData = results[0]; // results from stock exchange
      const bitpayData = results[1]; // results from bitpay
      const zelBtcExchangeRate = cmcData[181].last;
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
