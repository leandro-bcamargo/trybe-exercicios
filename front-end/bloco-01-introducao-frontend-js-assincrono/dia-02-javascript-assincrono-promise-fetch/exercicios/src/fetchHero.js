import Swal from "sweetalert2";

export const fetchHero = (url) => {
  return fetch(url)
  .then(response => response.json())
  .then(data => data)
  .catch(error => Swal.fire(error.message));
}

// fetchHero(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`).then(response => console.log(response.length));