const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('Escreva um teste que verifique a chamada da callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.', (done) => {
  uppercase('teste', (str) => {
    try {
      expect(str).toBe('TESTE');
      done();
    } catch(error) {
    done(error);
    }
  });
});
