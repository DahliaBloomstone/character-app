import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'

import reducers from './reducers'
import App from './components/App'
import CharactersIndex from './components/CharactersIndex'
import CharactersShow from './components/CharactersShow'
import CharactersNew from './components/CharactersNew'


const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

 function renderRoutes() {
     return (
        <Provider store={createStoreWithMiddleware(reducers)}>
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route path="/new" component={CharactersNew} />
                        <Route path="/:id" component={CharactersShow} />
                        <Route exact path="/" component={CharactersIndex} />
                    </Switch> 
                </App>
            </BrowserRouter>
        </Provider>
     )
 }
    


export default renderRoutes
  