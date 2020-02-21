import React from 'react';
import './style.css';

const Logo = props => {
  return (
    <div className="logo">
      <img src={require('../../assets/icons/logo.png')}/>
      <a href="#" >CultureWeb</a>
    </div>
  )
}

export default Logo;
