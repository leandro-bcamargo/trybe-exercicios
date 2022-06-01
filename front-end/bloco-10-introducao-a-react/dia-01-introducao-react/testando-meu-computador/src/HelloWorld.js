import React from 'react';
// import React, { Component } from 'react';

class HelloWorld extends React.Component { //Classe JS com código React embutido
  render() { //Quando é passado para index.js, ReactDOM.render() vai invocar a função render do componente passado (no caso, HelloWorld) 
    return <span>Hello, world!</span>
  }
}

export default HelloWorld //Exporta componente para poder ser utilizado em outros arquivos