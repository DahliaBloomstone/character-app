import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchCharacters } from '../actions'
 

class CharactersIndex extends Component{
    componentDidMount(){
        this.props.fetchCharacters()
    }

    renderCharacters(){
        return _.map(this.props.characters, character =>{
            return(
                <li className="list-group-item" key={character.id}>
                    <Link to={`/characters/${character.id}`}>
                        {character.name}
                    </Link>
                </li>
            )
        })
    }
    render(){
        return (
            <div className="container index-container panel panel-default col-xs-10 col-sm-6">
                <div className="text-center">
                    <Link className="btn btn-primary" to="/new">
                        + New Character
                    </Link>
                </div>
                <div className="col-xs-12 text-center">
                    <h3>Characters</h3>
                    <ul className="list-group">
                        {this.renderCharacters()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { characters: state.characters}
}

export default connect(mapStateToProps, { fetchCharacters })(CharactersIndex)