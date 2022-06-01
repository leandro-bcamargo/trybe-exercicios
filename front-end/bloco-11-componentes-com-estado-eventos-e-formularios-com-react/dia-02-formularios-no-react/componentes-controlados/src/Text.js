import React from "react";

class Text extends React.Component {

  render() {
    const {handleInput, value } = this.props
    let error = undefined;
    if (value.length > 100) {
      error = "Maximum characters is 100."
    }
    if (value.length < 10) {
      error = "Minimum characters is 10"
    }
    return(
      <label>Text
      <input name='text' value={ value } type='text' onChange={ handleInput } />
      <span>
        {error ? error : ''}
      </span>
    </label>
    )
  }
}

export default Text;