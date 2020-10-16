import axios from 'axios'

export const FETCH_CHARACTERS = 'fetch_characters'
export const FETCH_SINGLE_CHARACTER = 'fetch_single_character'
export const CREATE_CHARACTER = 'create_character'
export const DELETE_CHARACTER = 'delete_character'

const ROOT_URL = "http://localhost:3000"


export function fetchCharacters(){
    const request = axios.get(`${ROOT_URL}/characters`)
    
    return{
        type: FETCH_CHARACTERS,
        payload: request
    }
}

export function createCharacter(values, callback){
    const request = axios.post(`${ROOT_URL}/characters`)

    return {
        type: CREATE_CHARACTER,
        payload: request
    }
}

export function fetchSingleCharacter(id){
    const request = axios.post(`${ROOT_URL}/characters/${id}`)

    return{
        type: FETCH_SINGLE_CHARACTER,
        payload: request
    }
}

export function deleteCharacter(id){
    const request = axios.post(`${ROOT_URL}`)

    return{
        type: DELETE_CHARACTER,
        payload: request
    }
}