// import Swal from 'sweetalert2';
// import fetchRates from './services/exchange';

import Swal from 'sweetalert2';
import fetchRates from './services/exchange';

// const currencyTitle = document.querySelector('.currency-title');
// const currencyList = document.querySelector('.currencies');

// export function createCurrencyListItem(name, value) {
//   const currencyListItem = document.createElement('li');
//   currencyListItem.classList.add('currency');
//   currencyListItem.innerHTML = `${name} <span>${value}</span>`;
//   return currencyListItem;
// }

// export function renderCurrencies(currencies, baseCurrency) {
//   currencyTitle.innerHTML = `Valores referentes a 1 <span id="base-currency-display">${baseCurrency}</span>`;
//   currencyList.innerHTML = '';

//   currencies.forEach((currency) => {
//     const currencyListItem = createCurrencyListItem(currency.name, currency.value);
//     currencyList.appendChild(currencyListItem);
//   });
// }

// export const searchBtn = document.querySelector('.search-btn');

// export const currencyInput = document.querySelector('#base-currency');

// export function handleSearch(event) {
//   event.preventDefault();
//   const inputValue = currencyInput.value;

//   if (!inputValue) {
//     Swal.fire({
//       title: 'Error!',
//       text: 'You have to insert a currency',
//       icon: 'error',
//       confirmButtonText: 'Cool',
//     });
//     return;
//   }

//   fetchRates(inputValue).then((response) => {
//     const { rates, base_code: base } = response;
//     const ratesArr = Object.entries(rates);
//     const ratesObjsArr = ratesArr.map(([name, value]) => ({ name, value }));

//     renderCurrencies(ratesObjsArr, base);
//   })
//     .catch((error) => {
//       Swal.fire({
//         title: 'Error!',
//         text: error.message,
//         icon: 'error',
//         confirmButtonText: 'Cool',
//       });
//     });
// }

export const currencyInput = document.querySelector('#base-currency');

export const searchButton = document.querySelector('.search-btn');

export const currencyTitle = document.querySelector('.currency-title');

export const currencyList = document.querySelector('.currency-list');

export default function renderCurrencyListItem(currency) {
  const currencyListItem = document.createElement('li');
  const { name, rate } = currency;
  currencyListItem.innerHTML = `${name} ${rate}`;
  currencyList.appendChild(currencyListItem);
}

export function handleSearch(event) {
  event.preventDefault();
  const inputValue = currencyInput.value;
  currencyList.innerHTML = '';
  try {
    if (!inputValue) throw new Error('You must enter a currency');
  } catch (error) {
    Swal.fire({
      title: 'Error!',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    });
    return; // Return early from the function if an error occurred
  }

  // Chain the .then and .catch handlers outside of the try-catch block
  fetchRates(inputValue)
    .then((currenciesData) => {
      currenciesData.forEach((currency) => {
        renderCurrencyListItem(currency);
      });
    })
    .catch((error) => {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    });
}
