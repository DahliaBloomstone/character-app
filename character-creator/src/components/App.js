import React, {Component} from 'react'
import { connect } from 'react-redux';
import { fetchCharacters } from './actions/index.js'

import React from "react"
import './App.css'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HelloWorld from './HelloWorld'

class App extends React.Component {
    render(){
        return(
            <BrowserRouter>
            <Switch>
            <div className="container app-container">
                {this.props.children}
            </div>
            </Switch>
            </BrowserRouter>
            
        )
    }
}

export default App