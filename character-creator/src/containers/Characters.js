import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Characters.css';
import CharacterCard from '../components/CharacterCard';
import CharacterForm from './CharacterForm'; //import action
import { getCharacters } from '../actions/characters';

class Characters extends Component{

  //used to call the action
  componentDidMount() {
    this.props.getCharacters()
  }

  render() {
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
