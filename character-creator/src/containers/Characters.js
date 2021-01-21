import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Characters.css';
import CharacterCard from '../components/CharacterCard';
import CharacterForm from './CharacterForm'; 
import { getCharacters } from '../actions/characters';

class Characters extends Component{

  constructor(props)
  { super(props)
    this.state = {sort: false, allCharacters: [] }
  }

 async componentDidMount() {
    console.log("App Mounted");
    const fetchedCharacters = await this.props.getCharacters()
    this.props.getCharacters()
    this.setState({sort: false, allCharacters: this.props.characters })
  }

  sortCharacters = () => {
    this.setState({allCharacters: this.props.characters.sort(function(characterA, characterB) {
      if(characterA.name < characterB.name) {
        return -1
      } else {
        return 1
      }
      })
    })
  }

  render() {
    console.log(this.props); 
    return (
      <>
      <div id="characters">
        <br></br>
        {<button onClick={this.sortCharacters}> Sort: </button>}
      </div>
      <div>
        <div className="CharactersContainer">
          <h1>Characters</h1>
          {this.state.allCharacters.map(character =>
            <CharacterCard
              key={character.id}
              character={character}
            />
          )}
        </div>
        <CharacterForm />
      </div>
        </>
    )
  }

};

const mapStateToProps = (state) => {
  return ({
    characters: state.characters
  })
};

export default connect(mapStateToProps, { getCharacters })(Characters);