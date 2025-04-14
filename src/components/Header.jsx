import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">Selling.</div>
        <div className="menu">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About Us</a>
          <a href="#special">Special</a>
          <a href="#testimonials-section">Testimonials</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;