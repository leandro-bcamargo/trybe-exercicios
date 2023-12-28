import validator from 'validator';

const textField = document.querySelector('#value');
const button = document.querySelector('#button');
const selector = document.querySelector('#option');
const outputText = document.querySelector('#answer');

button.addEventListener('click', (event) => {
  event.preventDefault();

  const fields = {
    cpf: validator.isTaxID(textField.value, 'pt-BR'),
    hexColor: validator.isHexColor(textField.value),
    email: validator.isEmail(textField.value),
    uuid: validator.isUUID(textField.value),
    url: validator.isURL(textField.value),
  };

  outputText.innerHTML = `A validação retornou ${fields[selector.value]}`;
});
