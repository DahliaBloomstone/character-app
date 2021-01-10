import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCharacter } from '../actions/characters';
import { updateCharacterFormData } from '../actions/characterForm';

//consumes global data 
//connected to redux 
//here i am binding event handlers
//functions in javascript are objects, right, so they have properties and methods 
//these are two methods handleOnChange and handleOnSubmit
//instead of using a constructor with the super method, we can use the arrow functions 
//arrows don't rebind this keyword, they inherit the this keyword 
//arrow functions are cleaner and simpler than the custom constructors and rebinding all event handlers
//In react, we do not modify the state directly.
//using javascript Object.assign() which copies all enumerable own properties from one or more source objects to a target object 
//modifying the character form data with the character properties i want to apply.
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

  //asynchronous call 
  //these react elements have multiple children 
  //essentially, react is comparing the virtual dom to the old dom and compare them to figure out what elements are modified 
  //so the character is modified becasue we are using the handleonSubmit property 
  //console logging, you can see the props (properties) in the console
  render() {
    console.log(this.props.characterFormData);
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

//this extracts data from the characterform data
//extracts data/selects the part of the data from the store that the connected component needs 
//grabbing the character data 
//it is defined as a function, takes state as the argument,
//the entire redux store state is the argument 
//returns a plain object that contains the data the component needs 
const mapStateToProps = state => {
  return {
    characterFormData: state.characterFormData
  }
}

export default connect(mapStateToProps, { updateCharacterFormData, createCharacter })(CharacterForm);
