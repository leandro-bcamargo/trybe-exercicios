// loginValidation.js
const greetingMessage = (user) => {
  return `Hello, ${user}! Que bom ter você de volta`;
};

const loginErrorMessage = (user) => {
  return `Pessoa usuária '${user}' não encontrada, tente novamente!`;
};

const user = {
  userName: "Joana",
  password: 123456,
};

const verifyCredentials = ({ userName, password }) => {
  if (password === 123456 && userName === "Joana") {
    return greetingMessage(userName);
  } else {
    return loginErrorMessage(userName);
  }
};

const { userName, password } = user;

module.exports = { greetingMessage, loginErrorMessage, verifyCredentials }


// Vamos primeiro entender as funções que estão implementadas no arquivo loginValidation.js. Neste arquivo encontram-se três funções para simular uma situação de login. A função verifyCredentials faz uma validação simples se a pessoa usuária e a senha recebidas como argumento são estritamente iguais às chaves userName e password contidas no objeto user. Se essa verificação retornar true a função verifyCredentials vai chamar a função greetingMessage , que por sua vez vai retornar uma frase de boas vindas com o nome da pessoa usuária. Já no caso da verificação retornar false , ou seja as credenciais inseridas não corresponderem com as existentes no objeto, a função verifyCredentials vai chamar a função loginErrorMessage , que irá por sua vez retornar um erro.

// Agora, crie outro arquivo no mesmo diretório com o nome 'loginValidation.test.js' e dentro dele copie e cole o código abaixo:

