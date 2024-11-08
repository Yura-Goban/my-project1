import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import './App.css';

const App = () => {
  const name = "Yuriy";
  const surname = "Goban";
  const city = "Lypetska Poliana";
  const hobby = "Video Games, Astronomy";
  const group = "IST";

  return (
    <Router>
      <Header name={name} surname={surname} city={city} hobby={hobby} />
      <nav className="nav">
        <Link to="/page1">Page 1</Link> | 
        <Link to="/page2">Page 2</Link>
      </nav>
      <Routes>
        <Route path="/page1" element={<Page1 city={city} />} />
        <Route path="/page2" element={<Page2 hobby={hobby} />} />
      </Routes>
      <Footer group={group} />
    </Router>
  );
};

export default App;
