import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Characters from './Characters';
import Home from '../components/Home';
import About from '../components/About';
import GreetingCharacters from '../components/GreetingCharacters';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';



class App extends Component {

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
