import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

const Navbar = props => {

  const[search, setSearch]= useState(false)

  const openSearch = () => {
    setSearch(true);
  }
  const searchClass = search ? 'searchInput active': 'searchInput';

  const submitSearch = (e) => {
    e.preventDefault();
    alert("Searched");
  }
  return (
    <div className="navbar">
     <ul className="navbarMenu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/posts">Posts</NavLink></li>
        <li><NavLink to="/learn-react">Learn React</NavLink></li>
        <li><NavLink to="/documentation">Documentation</NavLink></li>
     </ul>
      <div className="search">
        <form onSubmit={submitSearch}>
          <input 
            className={searchClass}
            type="text" 
            placeholder="Search"/>
          <img 
            onClick={openSearch}
            src={require('../../assets/icons/search.png')} 
            alt="Search" />
        </form>
      </div>
    </div>
  )
}

export default Navbar;
