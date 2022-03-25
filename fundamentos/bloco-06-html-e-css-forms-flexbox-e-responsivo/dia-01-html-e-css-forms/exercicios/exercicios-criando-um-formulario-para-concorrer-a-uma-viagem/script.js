// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault() . Nossa amiga Carol Silva nos contou um pouco sobre como fazer isso, lembra?
// Crie um botão que limpe as informações contidas nos campos;
let submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
})
// A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.
let checkboxContest = document.querySelector("#checkbox-contest");
checkboxContest.required = true;

// Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: 'Dados Inválidos'. Caso contrário, a mensagem 'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.' deverá aparecer na tela.
{/* <input type="text" name="name" id="input-name" minlength="10" maxlength="40">
<input type="email" name="email" id="input-email" minlength="10" maxlength="50">
<textarea name="motivacao" id="textarea-motivacao" cols="30" rows="10" maxlength="500"> */}

let submit = document.querySelector("#submit-button");
submit.addEventListener("click", validate);

function validate() {
    let name = document.querySelector("#input-name");
    let email = document.querySelector("#input-email");
    let motivation = document.querySelector("#textarea-motivacao");
    if (name.value.length >= 10 && name.value.length <= 40) {
        if (email.value.length >= 10 && email.value.length <= 50) {
            if (motivation.value.length <= 500) {
                alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.");
            }
        }
    }
    else {
        alert("Dados Inválidos");
    }    
}

// function validateEmail() {
//     l
    
//         alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.");
//     }
//     else {
//         alert("Dados Inválidos");
//     }    
// }
// validateEmail();

// function validateMotivation() {
    
   
//         alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.");
//     }
//     else {
//         alert("Dados Inválidos");
//     }    
// }
// validateMotivation();