import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      pokemons.map(({name, type, averageWeight, image, id}) => (
        <Pokemon key={id} name={name} type={type} weight={averageWeight} image={image} />
      ))
    )
  }
}

export default Pokedex;