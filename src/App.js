import React from 'react';
import './App.css';
import Home from './containers/Home';
import Hero from './components/Hero';
import Header from './components/Header/Header';

function App(){
  return (
    <div className="App">
      <Header/>
      <Hero />
      <Home/>
    </div>
  );
}

export default App;
