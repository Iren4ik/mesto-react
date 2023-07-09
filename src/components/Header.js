import React from 'react';
import Logo from '../images/logo.svg';

function Header() {
  return (
    <header className="header">
        <img src={Logo} className="logo" alt="Логотип"/>
    </header>
  );
}

export default Header;