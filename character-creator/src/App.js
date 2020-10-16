//*
import React, { useState } from 'react';
import axios from 'axios'
import './App.css';

//import React, { Component } from 'react';
//import { connect } from 'react-redux';


function App() {
  const [image, setImage] = useState('')

  const handleChange = () => { 
    axios 
    .get('https://api.generated.photos/api/v1/faces?api_key=-oSJ9MnkYiiimwgLEOefKQ&order_by=random')
    .then(res => {
      const uri = res.data.faces[0].urls[4][512];
      uri && setImage(uri)
    })
    .catch(err => {
    console.log(err.message)
  });
};
    
  return (
    <div className="App">
    <h1> Character Creator </h1>
    {image && <img src={image} alt="CHARACTER FACES" />}
    <button type='button' onClick={handleChange}>
    New Character 
    </button>  
    </div>
  );
}

export default App;
