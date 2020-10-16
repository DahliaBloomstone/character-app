import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { createCharacter } from '../actions'

class CharactersNew extends Component{
    renderField(field){
        const { meta: {touched, error }} = field
        const className = `form-group ${touched && error ? "has-danger" : ""}`

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input}/>
                <div className="text-help">
                    {touched ? error: ""}
                </div>
            </div>
        )
    }

    onSubmit( values){
        this.props.createCharacter(values, ()=>{
            this.props.history.push("/")
        })
    }

    render(){
        const { handleSubmit } = this.props
        console.log(this.props)
        return (
            <div className="container panel panel-default new-container">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                    label="Character Name"
                    name="name"
                    component={this.renderField}
                    />
                    <Field
                    label="Character Story"
                    name="story"
                    component={this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </form>
            </div>
        )
    }
}


function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = "Enter a Character Name:";
  }
  if (!values.story) {
    errors.story = "Enter a character story:";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "CharactersNewForm"
})(connect(null, { createCharacter })(CharactersNew));


