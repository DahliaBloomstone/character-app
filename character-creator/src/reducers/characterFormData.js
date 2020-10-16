import _ from 'lodash'
import { FETCH_CHARACTERS, FETCH_SINGLE_CHARACTER, DELETE_CHARACTER } from '../actions'

export default function(state = {}, action){
    
    switch(action.type){
        case DELETE_CHARACTER:
            return _.omit(state, action.payload)
       
            case FETCH_CHARACTERS:
            return _.mapKeys(action.payload.data, "id")
       
            case FETCH_SINGLE_CHARACTER:
            return {...state, [action.payload.data.id]: action.payload.data}
        d
        efault:
            return state;
    }
}
export default charactersReducer;