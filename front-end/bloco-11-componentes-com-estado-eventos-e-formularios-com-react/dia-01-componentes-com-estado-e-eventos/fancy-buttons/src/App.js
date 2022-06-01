import logo from './logo.svg';
import './App.css';
import React from 'react'



class App extends React.Component {
  state = {
    count1: 0,
    count2: 0,
    count3: 0
  }

  printText1 = () => {
    this.setState((prevState) => ({
      count1: prevState.count1 + 1 
    }))
  }
  
  printText2 = () => {
    this.setState((prevState) => ({
      count2: prevState.count2 + 1
    }))
  }
  
  printText3 = () => {
    this.setState((prevState) => ({
      count3: prevState.count3 + 1
    }))
  };
    
  render() {
    const { count1, count2, count3 } = this.state;
    return (
      <div>
        <button onClick={ this.printText1 }>{ count1 }</button>
        <button onClick={ this.printText2 }>{ count2 }</button>
        <button onClick={ this.printText3 }>{ count3 }</button>
      </div>
    );
  }
}

export default App;
