export default (state=[], action) => {

    switch(action.type) {
  
      case 'GET_CHARACTERS_SUCCESS':
        return action.characters;
  
      case 'CREATE_CHARACTER_SUCCESS':
        return state.concat(action.character)
  
      case 'REMOVE_CHARACTER_SUCCESS':
        return state.filter(character => character.id !== action.character.id)
  
          default:
        return state;
    }
  }
  