import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import CharactersReducer from './characters_reducer'

const rootReducer = combineReducers({
    characters: CharactersReducer,
    form: formReducer
})

export default rootReducer