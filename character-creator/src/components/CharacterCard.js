import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCharacter, likeCharacter } from '../actions/characters';
//presentational components 

class CharacterCard extends Component {

  render() {
    const { id, name, location, image_url, date, background_info, like } = this.props.character;
    return (
      <div key={id} className="CharacterCard">
        <img className="CharacterImage" src={image_url} alt={name} />
        <h4 className="CharacterName">{name}</h4>
        <p>{date} &#124; {location}</p>
        <p>{background_info}</p>
        <p>Likes: {like}</p>
        <button
          type="button"
          title="Like Character"
          className="btn-like"
          onClick={() => this.props.likeCharacter(this.props.character)}
        >Like</button>
        <button
          type="button"
          title="Delete Character"
          className="btn-delete"
          onClick={() => this.props.deleteCharacter(this.props.character)}
        >X</button>
      </div>
    )
  }

};

const mapStateToProps = (state) => {
  return { characters: state.characters }
}

export default connect(mapStateToProps, {deleteCharacter, likeCharacter}, null)(CharacterCard);
