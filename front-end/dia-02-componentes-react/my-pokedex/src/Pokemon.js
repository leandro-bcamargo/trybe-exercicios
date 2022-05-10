import React from "react";
import PropTypes from 'prop-types'

class Pokemon extends React.Component {
  render() {
    const {name, type, weight, image} = this.props;
    return (
      <div>
        <img src={image} alt={name}/>
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>Weight: {weight.value}{weight.measurementUnit}</p>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.shape({
    measurementUnit: PropTypes.string,
    value: PropTypes.number,
  }),
  image: PropTypes.string,
};


export default Pokemon;