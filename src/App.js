import React from 'react';
import './App.css';
import Home from './containers/Home';
import ContactUs from './containers/ContactUs';
import Features from './containers/Features';
import Hero from './components/Hero';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Switch, Route }from 'react-router-dom';

function App(){
  return (
    <Router>
      <div className="App">
        <Header/>
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/features" component={Features} />
      </div>
    </Router>
  );
}

export default App;
