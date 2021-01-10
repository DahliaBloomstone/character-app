import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Characters.css';
import CharacterCard from '../components/CharacterCard';
import CharacterForm from './CharacterForm'; //import action
import { getCharacters } from '../actions/characters';

class Characters extends Component{

  //used to call the action
  //wrapped in a div because babel can compile it in React.createElement('div')
  //inside that element are more elements 
  //div wraps the other elements 
  //this is a react hook, a method called when an instance of a component is being created and inserted into the DOM
  //mounting the characters to the DOM
  componentDidMount() {
    this.props.getCharacters()
  }

  //use map method to map each element in the array into a react element 
  //rendered dynamically in curly braces 
  //argument using arrow function 
  //each character string mapped to a JSX expression  
  //compiled to a react element (essentially plain javascript object)
  //rendering each character with character card elements like background and name
  //each character has a key attribute set to the dynamic value
  //each character is an object with an id property 
  //each item has a key that is unique only in that list 

//sort by date method: 
/*
mapCharacters = () => {
  let allCharacters = this.props.characters 
  if (this.state.sort) {
    allCharacters = this.props.characters.sort(fucntion(characterA, characterB) {
      if(characterA.attributes.updated_at < characterB.attributes.updated_at) {
        return 1
      }else {
        return -1
      }
    })
  }
*/


/*then put a sort button like 
<br></br>
{/*<button onClick={this.sortCharacters} >Sort by newe</button> */

  render() {
    console.log(this.props); //seeing the properties of characters
    return (
      <div>
        <div className="CharactersContainer">
          <h1>Characters</h1>
          {this.props.characters.map(character =>
            <CharacterCard
              key={character.id}
              character={character}
            />
          )}
        </div>
        <CharacterForm />
      </div>
    )
  }

};

//selecting part of the data from the store that the connected component needs 
//recieves entire store state 
//returns an object of data this component needs 
const mapStateToProps = (state) => {
  return ({
    characters: state.characters
  })
};

export default connect(mapStateToProps, { getCharacters })(Characters);
