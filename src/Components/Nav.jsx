
import React from "react";
import "../Components/Nav.css";
import { Component } from 'react';
import mylogo from '../Images/mylogo.svg'
import icon1 from '../Images/icon1.svg' ;
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
    
<Link to="/">
  <img className="logo" src={mylogo} alt="Logo" />
</Link>

      <ul className="nav-linkss">
        <li>About me</li>
        <li>Categories</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
