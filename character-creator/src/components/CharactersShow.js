import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchSingleCharacter, deleteCharacter } from '../actions'

class CharactersShow extends Component{
    componentDidMount(){
        this.props.fetchSingleCharacter(this.props.params.id)
    }

    deleteCharacter(){
        this.props.deleteCharacter(this.props.params.id)
        this.props.history.push('/')
    }


    render(){
        if(!this.props.character){
            return (<div>Getting your character...</div>)
        }
        return (
            <div className="container panel panel-default show-container">
                <div className="col-xs-12">
                    <Link className="btn btn-primary" to="/">Go Back</Link>
                </div>
                <div className="text-center show-header">
                    <h2>{this.props.character.name}</h2>
                </div>
                <div className="show-body">
                    <p>{this.props.character.story}</p>
                </div>
                <div className="col-xs-12 text-center">
                    <button onClick={this.deleteCharacter.bind(this)} className="btn btn-danger">Delete Post</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { character: this.state.character}
}

export default connect(mapStateToProps, { fetchSingleCharacter })(CharactersShow)