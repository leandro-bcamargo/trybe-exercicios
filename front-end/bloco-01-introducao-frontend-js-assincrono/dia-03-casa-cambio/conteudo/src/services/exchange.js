// function fetchRates(searchedCurrency) {
//   return fetch(`https://open.er-api.com/v6/latest/${searchedCurrency}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       const { base_code: base } = data;
//       if (base !== searchedCurrency) {
//         throw new Error('Currency does not exist');
//       }
//       return data;
//     });
// }

import Swal from 'sweetalert2';

// export default fetchRates;

function turnIntoObjArray(currObject) {
  const currMatrix = Object.entries(currObject);
  return currMatrix.map((currency) => {
    const [name, rate] = currency;
    return { name, rate };
  });
}

function fetchRates(currency) {
  return fetch(`https://open.er-api.com/v6/latest/${currency}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { base_code: baseCode, rates } = data;
      if (currency.toLowerCase() !== baseCode.toLowerCase()) {
        throw new Error('Currency does not exist in API');
      }
      return turnIntoObjArray(rates);
    });
}

export default fetchRates;
