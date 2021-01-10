//importing modules, acquiring assets from other modules 
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Characters from './Characters';
import Home from '../components/Home';
import About from '../components/About';
import GreetingCharacters from '../components/GreetingCharacters';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

//render component, displays retrieved data in our app
//first thought about what we wanted it to look like 
//lay each component out, move them around and add css 
//add routes 
class App extends Component {

  //literal navigation bar shows what we are looking at 
  //using route exact path because i have multiple paths with  similar names
  //declarative routing
  //The Route component is perhaps the most important component in React Router to understand and learn to use well. Its most basic responsibility is to render some UI when its path matches the current URL.

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/characters" component={Characters} />
            <Route exact path="/greeting-characters" component={GreetingCharacters} />
            <Route exact path="/about" component={About} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}


export default App;
