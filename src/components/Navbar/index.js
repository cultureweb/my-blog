import React, {useState} from 'react';
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
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Learn React</a></li>
        <li><a href="#">Documentation</a></li>
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
