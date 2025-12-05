
import React from "react";
import "../Components/Nav.css";
import { Component } from 'react';
import mylogo from '../Images/mylogo.svg'
import icon1 from '../Images/icon1.svg' ;

const Navbar = () => {
  return (
    <nav className="navbar">
     <img className="logo" src={mylogo} alt="" />

      <ul className="nav-links">
        <li>Home</li>
        <li>About me</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
