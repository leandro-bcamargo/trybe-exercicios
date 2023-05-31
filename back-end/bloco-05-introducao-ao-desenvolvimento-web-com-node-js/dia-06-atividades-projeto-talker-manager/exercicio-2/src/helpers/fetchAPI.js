const axios = require('axios');

module.exports = fetchAPI = async () => {
  const endpoint = "https://api.coindesk.com/v1/bpi/currentprice/BTC.json";
  const result = await axios.get(endpoint);
  console.log(result.data)
  return result.data; 
}