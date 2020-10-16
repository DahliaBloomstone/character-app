import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import CharactersReducer from './characters_reducer'
//import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';



const rootReducer = combineReducers({
    characters: CharactersReducer,
    form: formReducer
})

export default rootReducer