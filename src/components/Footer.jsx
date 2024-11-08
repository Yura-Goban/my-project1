import React from 'react';
import './Footer.css';  // перевірте, чи правильний шлях

const Footer = ({ group }) => {
  return (
    <footer className="footer">
      <p>Group: {group}</p>
    </footer>
  );
};

export default Footer;
 