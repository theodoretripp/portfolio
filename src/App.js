import React, { Component } from 'react';
import './App.css';
import Home from './HomeComponent.js';
import Contact from './ContactComponent.js';
import Social from './SocialComponent.js';
import Nav from './NavComponent.js';
import Portfolio from './PortfolioComponent.js';
import About from './AboutComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid text-muted text-left">
        <Nav />
        <Home />
        <Portfolio />
        <Contact />
        <Social />
        <About />
      </div>
    );
  }
}

export default App;
