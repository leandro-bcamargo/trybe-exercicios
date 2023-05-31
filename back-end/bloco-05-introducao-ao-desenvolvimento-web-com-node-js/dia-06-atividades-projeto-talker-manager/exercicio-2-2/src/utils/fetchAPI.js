const fetch = require('node-fetch');

module.exports = async () => {
  const endpoint = "https://api.coindesk.com/v1/bpi/currentprice/BTC.json)";
  const response = await fetch(endpoint);
  const json = await response.json();
  return json;
}