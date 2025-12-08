
import React from "react";
import "../Components/WhiteNav.css";
import { Component } from 'react';
import mylogo from '../Images/mylogo copy.svg'
import icon1 from '../Images/icon1.svg' ;
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
     <Link to="/">
  <img className="logo" src={mylogo} alt="Logo" />
</Link>


      <ul className="nav-links">
        <li>About me</li>
         <li>Categories</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
