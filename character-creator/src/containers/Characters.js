import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Characters.css';
import CharacterCard from '../components/CharacterCard';
import CharacterForm from './CharacterForm'; 
import { getCharacters } from '../actions/characters';

class Characters extends Component{

  componentDidMount() {
    console.log("App Mounted");
    this.props.getCharacters()
  }

  render() {
    console.log(this.props); 
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

const mapStateToProps = (state) => {
  return ({
    characters: state.characters
  })
};

export default connect(mapStateToProps, { getCharacters })(Characters);
