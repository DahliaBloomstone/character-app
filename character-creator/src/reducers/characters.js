export default (state=[], action) => {

    switch(action.type) {
  
      case 'GET_CHARACTERS_SUCCESS':
        return action.characters;
  
      case 'CREATE_CHARACTER_SUCCESS':
        return state.concat(action.character)
  
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
  
      default:
        return state;
    }
  }
  