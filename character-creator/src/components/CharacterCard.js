import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCharacter, createCharacter } from '../actions/characters';

class CharacterCard extends Component {

  state = {
    count: 0
  }

  likerFunction = () => {
    console.log("Character Liked!")
  }

  likerFunction = () => {
    let newLike = this.state.count + 1
    this.setState({
      count: newLike
    })
  }

  render() {
    console.log(this.props); //IMPORTANT 
    const { id, name, location, image_url, date, background_info, } = this.props.character;
    return ( 
      <div key={id} className="CharacterCard">
        <img className="CharacterImage" src={image_url} alt={name} />
        <h4 className="CharacterName">{name}</h4>
        <p>{date} &#124; {location}</p>
        <p>{background_info}</p>

        <button onClick={this.likerFunction}> Likes: {this.state.count} </button>

        <button
          type="button"
          title="Delete Character"
          className="btn-delete"
          onClick={() => this.props.deleteCharacter(this.props.character)}
        >:(</button>
      </div>
    )
  }

};

const mapStateToProps = (state) => {
  return { characters: state.characters }
}

export default connect(mapStateToProps, {deleteCharacter, createCharacter}, null)(CharacterCard);

