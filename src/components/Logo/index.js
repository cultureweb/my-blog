import React from 'react';
import './style.css';

const Logo = props => {
  return (
    <div>
      <div className="center">
        <img src={require('../../assets/icons/image.png')}/>
      </div>
      <p className="logo">
          <a href="#" >CultureWeb</a>
      </p>
    </div>
  )
}

export default Logo;
