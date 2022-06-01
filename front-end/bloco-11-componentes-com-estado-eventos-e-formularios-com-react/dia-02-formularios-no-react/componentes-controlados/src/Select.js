import React from "react";

class Select extends React.Component {
  render() {
    const { handleInput, value, handleErrors }= this.props
    let error = undefined;
    if (value === "talvez") {
      error = "Talvez não é permitido"
    }
    let test = 'a'
    console.log(test.length);
    console.log(!test);
    return(
      <label>Select
            <select value={ value } name='select' id='select' onChange={ handleInput }>
              <option value='sim'>Sim</option>
              <option value='nao'>Não</option>
              <option value='talvez'>Talvez</option>
            </select>
              <span>
                {error ? error : ''}
              </span>
          </label>
 
    )
  }
}

export default Select