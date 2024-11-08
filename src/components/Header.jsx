import React from 'react';
import './Header.css';  // перевірте, чи правильний шлях

const Header = ({ name, surname, city, hobby }) => {
  return (
    <header className="header">
      <h1>{name} {surname}</h1>
      <p>{city}</p>
      <p>{hobby}</p>
    </header>
  );
};

export default Header;
