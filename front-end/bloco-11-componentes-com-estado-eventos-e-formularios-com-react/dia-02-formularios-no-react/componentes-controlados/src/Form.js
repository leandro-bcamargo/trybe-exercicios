import React from 'react';
import Select from './Select';
import Text from './Text';


class Form extends React.Component {
  state = {
    select: '',
    text: '',
    number: 0,
    textarea: '',
    checkbox: false,
    formularioComErros: false,
  }

  handleInput = ({ target: { name, value, checked, type } }) => {
    value = type === 'checkbox' ? checked : value; 
    this.setState({
      [name]: value,
    })
  }

  handleErrors = () => {
    const { select, text } = this.state;

    const errorCases = [
      ,

    ]

    this.setState({
      formularioComErros: true,
    })
  }

  render() {
    const { select, text, number, textarea, checkbox} = this.state
    return(
      <form>
        <fieldset>
          <legend>Title</legend>
          <Select 
          handleInput={ this.handleInput }
          value={ select }
          handleErrors={ this.handleErrors }
          />
          <Text 
          handleInput={ this.handleInput }
          value={ text }/>
          <label>Number
            <input value={ number }name='number' type='number' onChange={ this.handleInput}/>
          </label>
          <label>Textarea
            <input value={ textarea} name='textarea' type='textarea' onChange={ this.handleInput }/>
          </label>
          <label>Checkbox
            <input type='checkbox' name='checkbox' checked={ checkbox } onChange={ this.handleInput } />
          </label>
          <label>
            <input type='file' />
          </label>
        </fieldset>
      </form>

    )
  }
}

export default Form

