import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCharacter, likeCharacter, createCharacter } from '../actions/characters';
//presentational components 
//below is JSX expressions
//we have to import react object at the top, calls React.createElement
//defining the class and exporting it separately 
//using curly braces to render javascript objects dynamically 
//className attribute is not simply class because it is a JSX expression
//cannot use class property on an object bc it is a reserved keyword in javascript  
//using an event like onClick for the like and delete buttons, sort of standard dom events i'm familiar with 
// set equal to curly braces because i'm passing my expression
//i am using this as a reference to my class method 
//every react component has a property called PROPS.
//basically a plain javascript object that includes all the html attributes of the component.
//this.props.character is a function argument in javascript with html attributes. 
class CharacterCard extends Component {

  render() {
    console.log(this.props); //IMPORTANT 
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

          //instead of hard coding, passing a reference to the character that's currently being rendered 
          //event handler simply pass arrow function, call the event handler, and pass the argument 
          onClick={() => this.props.likeCharacter(this.props.character)}
        >Like</button>
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

//this extracts data 
//extracts data/selects the part of the data from the store that the connected component needs 
//grabbing the character data 
//it is defined as a function, takes state as the argument,
//the entire redux store state is the argument 
//returns a plain object that contains the data the component needs 
const mapStateToProps = (state) => {
  return { characters: state.characters }
}

export default connect(mapStateToProps, {deleteCharacter, likeCharacter, createCharacter}, null)(CharacterCard);


/*
Destructuring is the idea that we have multiple references to props
object destructuring can destructure the argument 
({ properties we are interested in }) instead of saying characters.props
const { onClick, onDelete } = this.props;
now anywhere we have this.props.characters or something you can replace all of it with nothing
makes the code cleaner 

We can destructure props and state. 
it is an ES6 feature. 
in react, it improves code readability. 

in our functional component with props (properties, attributes) we
access them with props.deleteCharacter for example. 
It is extracting the JSX from the props object. 

literally replacing the word props. 

Example: 

BEFORE:

const navBar = props => {
  return (
    <nav className="styling">
    Navbar{" "}
    {props.characterCard}
    </nav>
  );
};
export default navBar;

DESTRUCTURED:
we are intereseted in the characterCard property of this object 

const navBar = ({  characterCard }) => {
  return (
    <nav className="styling">
    Navbar{" "}
    {characterCard}
    </nav>
  );
};
export default navBar;


*/