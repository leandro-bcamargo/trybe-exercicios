// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault() . Nossa amiga Carol Silva nos contou um pouco sobre como fazer isso, lembra?
// Crie um botão que limpe as informações contidas nos campos;
let submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
})