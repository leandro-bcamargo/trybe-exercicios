// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");
let href = document.querySelector("#href");
href.addEventListener("click", function(event) {
    event.preventDefault();
})

let checkbox = document.querySelector("#input-checkbox");
checkbox.addEventListener("click", function(event) {
    event.preventDefault();
}) 

let input = document.querySelector("#input-text");
input.addEventListener("keypress", function(event) {
    if (event.key !== "a") {
        event.preventDefault();
    }
})