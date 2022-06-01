import logo from './logo.svg';
import './App.css';
import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import Pokedex from './Pokedex';

class App extends React.Component {
  render() {
    return (
      <Pokedex />
    )
  }
}

export default App;
