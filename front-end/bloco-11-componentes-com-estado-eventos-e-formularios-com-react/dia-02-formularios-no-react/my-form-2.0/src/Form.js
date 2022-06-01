import React from 'react';

class Form extends React.Component {
  state = {
    name: '',
    email: '',
    cpf: '',
    address: '',
  }

  handleInput = ({target: { name, value }}) => {
    if (name === 'name') {
      this.setState({
        name: value.toUpperCase(),
      })} else if (name === 'address') {
        this.setState({
          address: value.replace(/[^a-zA-Z0-9 ]/g, '')
      })} else {
        this.setState({
          [name]: value,
        })}
  }

  render() {
    const { name, email, cpf, address } = this.state
    return (
      <form>
        <fieldset>
          <label>Nome
            <input value={ name } name='name' maxLength="40" type='text' onChange={ this.handleInput } required />
          </label>
          <label>Email
            <input value={ email } type='text' name='email' onChange={ this.handleInput }  maxLength='50' required />
          </label>
          <label>CPF
            <input type='text' value={ cpf } name='cpf' onChange={ this.handleInput } required maxLength='11' />
          </label>
          <label>Endereço
            <input type='text' value={ address } name='address' onChange={ this.handleInput } required maxLength='400'/>
          </label>
          <label>Cidade
            <input type='text' name='city' value={ city } onChange={ this.handleInput } required maxLength='28' />
          </label>
        </fieldset>
      </form>
    )
  }
}

export default Form;