import { fetchHero } from "./fetchHero";
import { generateRandomNum } from "./idGenerator";


const superheroPhoto = document.querySelector('#superhero-photo');
const superheroName = document.querySelector('#superhero-name');

const newSuperheroBtn = document.querySelector('#new-superhero-btn')
newSuperheroBtn.addEventListener('click', () => {
  const randomNum = generateRandomNum(1, 563)
  const URL = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${randomNum}.json`
  fetchHero(URL).then(response => {
    superheroPhoto.src = response.images.md;
    superheroName.innerHTML = response.name;
  });
  superheroPhoto.style.display = "inline";
})