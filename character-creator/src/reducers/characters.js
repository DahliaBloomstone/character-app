//reducers return new state based on action

//set up initial state 
//set up action creator type 
//switch case 
//default is an empty version of whatever reducer is responsible for returning
//will return array of objects of characters
export default (state=[], action) => {

    switch(action.type) {
  
      case 'GET_CHARACTERS_SUCCESS':
        return action.characters;
  
        //get existing array, concatenate it 
      case 'CREATE_CHARACTER_SUCCESS':
        return state.concat(action.character)
  
        //get existing array, filter it
      case 'REMOVE_CHARACTER_SUCCESS':
        return state.filter(character => character.id !== action.character.id)
  
      case 'LIKE_CHARACTER':
        return state.map((character) => {
          if (character.id === action.character.id) {
            return action.character
          } else {
            return character;
          }
        });
  
        //if actions are neither, return current state 
      default:
        return state;
    }
  }
  