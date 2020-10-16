import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="Nav">
      <ul>
        <li className="HomeItem"><NavLink to='/' header>CharacterCreator</NavLink></li>
        <li><NavLink to='/characters' name='Characters'>Characters</NavLink></li>
        <li><NavLink to='/greeting-characters' name='GreetingCharacters'>Creating Characters</NavLink></li>
        <li><NavLink to='/about' name='About'>About</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar;
