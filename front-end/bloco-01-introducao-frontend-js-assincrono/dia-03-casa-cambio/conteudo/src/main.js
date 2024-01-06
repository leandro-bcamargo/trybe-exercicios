// import { handleSearch, renderCurrencies, searchBtn } from './components';
// import './style.css';

import { handleSearch, searchButton } from './components';

// const fakeCurrencies = [
//   { name: 'USD', value: 5 },
//   { name: 'EUR', value: 5.5 },
// ];

// renderCurrencies(fakeCurrencies, 'USD');

// searchBtn.addEventListener('click', (event) => handleSearch(event));

searchButton.addEventListener('click', handleSearch);
