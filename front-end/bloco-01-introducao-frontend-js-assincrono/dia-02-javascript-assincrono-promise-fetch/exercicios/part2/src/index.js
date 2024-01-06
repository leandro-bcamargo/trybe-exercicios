import { fetchAPI } from "./fetchAPI";

const dogAPI = "https://dog.ceo/api/breeds/image/random"
const catAPI = "https://api.thecatapi.com/v1/images/search";

const getDogBtn = document.querySelector('#random-dog-btn');
const getCatBtn = document.querySelector('#random-cat-btn');
const surpriseMeBtn = document.querySelector('#surprise-me-btn');
const petImg = document.querySelector('#pet-img');

getDogBtn.addEventListener('click', () => {
  fetchAPI(dogAPI).then(response => {
    petImg.src = response.message;
  });
  petImg.style.display = "inline";
})

getCatBtn.addEventListener('click', () => {
  fetchAPI(catAPI).then(([response]) => {
    petImg.src = response.url;
  })
  petImg.style.display = "inline";
})

surpriseMeBtn.addEventListener('click', () => {
  const dogPromise = fetchAPI(dogAPI)
  .then(response => response.message)

  // A function that adds some delay to a promise
function delay(promise, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      promise.then(resolve, reject);
    }, ms);
  });
}

// Add some delay to the catPromise
const catPromise = delay(fetchAPI(catAPI)
  .then(([response]) => response.url), 250); // 1000 ms delay


  const promisesArr = [dogPromise, catPromise];
  Promise.any(promisesArr).then(response => {
    petImg.src = response;
  })
  .catch(error => console.error(error));
  petImg.style.display = "inline";
})