//action.type actions need a type property 
//
import { resetCharacterForm } from './characterForm';

const API_URL = process.env.REACT_APP_API_URL;


export const setCharacters = characters => {
  return {
    type: 'GET_CHARACTERS_SUCCESS',
    characters
  }
}

export const addCharacter = character => {
  return {
    type: 'CREATE_CHARACTER_SUCCESS',
    character
  }
}

export const addLike = character => {
  return {
    type: 'LIKE_CHARACTER',
    character
  }
}

export function removeCharacter(character) {
  return {
    type: 'REMOVE_CHARACTER_SUCCESS',
    character
  }
}

export function deleteCharacter(character) {
  return dispatch => {
    dispatch(removeCharacter(character));
    return fetch(`${API_URL}/characters/${character.id}`, {
      method: "DELETE",
      body: JSON.stringify(character),
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json'

      }
     })
     .then(res => console.log(res))
  }
}

//fetch request 
export const getCharacters = () => {
  return dispatch => {
    return fetch(`${API_URL}/characters`)
      .then(response => response.json())
      .then(characters => dispatch(setCharacters(characters)))
  }
}


export const createCharacter = character => {
  return dispatch => {
    return fetch(`${API_URL}/characters/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        
      },
      body: JSON.stringify(character)
    })
      .then(response => response.json())
      .then(character => {
        dispatch(addCharacter(character))
        dispatch(resetCharacterForm())
      })
  }
}

export const likeCharacter = (character) => {
  return dispatch => {
    return fetch(`${API_URL}/characters/${character.id}`, {
      method: "PATCH",
      headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({like: character.like + 1})
      })
        .then(response => response.json())
        .then(console.log("a"))
        .then(character => {
          dispatch(addLike(character))
        })
  }
}
