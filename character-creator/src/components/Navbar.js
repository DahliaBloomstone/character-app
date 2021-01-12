import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="Nav">
      <ul>
    <h2> <li className="HomeItem"><NavLink to='/' header>Character Creator</NavLink></li></h2>   
    <h2>   <li><NavLink to='/characters' name='Characters'>Characters</NavLink></li> </h2>   
    <h2>         <li><NavLink to='/greeting-characters' name='GreetingCharacters'>Creating Characters</NavLink></li> </h2>   
    <h2>       <li><NavLink to='/about' name='About'>About</NavLink></li> </h2>   
      </ul>
    </div>
  )
}

export default Navbar;
