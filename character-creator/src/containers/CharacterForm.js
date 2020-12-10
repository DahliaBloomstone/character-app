import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCharacterFormData } from '../actions/characterForm';
import { createCharacter } from '../actions/characters';

//consumes global data 
//connected to redux 

class CharacterForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentCharacterFormData = Object.assign({}, this.props.characterFormData, {
      [name]: value
    })
    this.props.updateCharacterFormData(currentCharacterFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createCharacter(this.props.characterFormData)
  }

  render() {
    const { name, location, image_url, date, background_info } = this.props.characterFormData;
    return(
      <div className="CharacterForm">
        <h3>Add a new Character:</h3>
        <form onSubmit={this.handleOnSubmit}>
          <div className="FormField">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              onChange={this.handleOnChange}
              value={name}
            />
          </div>
          <div className="FormField">
          <label htmlFor="location">Location:</label>
            <input
              type="text"
              name="location"
              onChange={this.handleOnChange}
              value={location}
            />
          </div>
          <div className="FormField">
            <label htmlFor="image_url">Image URL:</label>
            <input
              type="text"
              name="image_url"
              onChange={this.handleOnChange}
              value={image_url}
            />
          </div>
          <div className="FormField">
            <label htmlFor="date">Date:</label>
            <input
              type="text"
              name="date"
              onChange={this.handleOnChange}
              value={date}
            />
          </div>
          <div className="FormField">
            <label htmlFor="background_info">Background Info:</label>
            <input
              type="text"
              name="background_info"
              onChange={this.handleOnChange}
              value={background_info}
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    characterFormData: state.characterFormData
  }
}

export default connect(mapStateToProps, { updateCharacterFormData, createCharacter })(CharacterForm);
