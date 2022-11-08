import React from 'react';
import '../App.css';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <span className='logo'>Logo</span>
      <Nav />
    </header>
  );
}

export default Header;