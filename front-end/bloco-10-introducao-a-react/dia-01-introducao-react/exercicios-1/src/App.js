import logo from './logo.svg';
import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  )
}

const array = ['estudar', 'ler', 'tomar cha', 'assistir twitch', 'duolingo', 'grasshopper'];

class App extends React.Component {
  render () {
    return (
      <ul>{ array.map((tarefa) => Task(tarefa)) }</ul>
    )
  }
}


export default App;
