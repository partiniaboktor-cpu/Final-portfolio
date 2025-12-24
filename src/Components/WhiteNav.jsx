
import React, { useEffect, useState } from "react";
import "../Components/WhiteNav.css";
import { Component } from 'react';
import mylogo from '../Images/mylogo copy.svg'
import icon1 from '../Images/icon1.svg' ;
import { Link } from "react-router-dom";
import { supabase } from "../Supabase";

const Navbar = () => {

const [loading, setLoading] = useState(true);
const [Nav, setNav] = useState("") ;


useEffect(()=>{

 async function getAllNavAPI(){
  const res = await supabase.from("Nav").select("*");
  setNav(res.data);
  // console.log(res.data);
    setLoading(false);
}
getAllNavAPI();

},[]);

if (loading) return <p>Loading...</p>;

  return (
    <nav className="navbar">
{Nav
  .filter(Nav => Nav.id === 2)
  .map(Nav => (
     <Link to="/">
  <img className="logo" src={Nav.logo} alt="Logo" />
</Link>

  ))
}
      <ul className="nav-links">
           <li>
{Nav
  .filter(Nav => Nav.id === 1)
  .map(Nav => (
            <Link className="linkkk" to="/About">{Nav.menu}</Link>
  ))
}
          </li>
                      <li>
{Nav
  .filter(Nav => Nav.id === 2)
  .map(Nav => (
             <Link className="linkkk" to="/categories">{Nav.menu}</Link>
  ))
}
           </li>
         
    <li>
{Nav
  .filter(Nav => Nav.id === 3)
  .map(Nav => (
            <Link className="linkkk" to="/blogs">{Nav.menu}</Link>
  ))
} 
          </li>
   <li>
  {Nav
  .filter(Nav => Nav.id === 4)
  .map(Nav => (
            <Link className="linkkk" to="/contact">{Nav.menu}</Link>
    ))
}
          </li>
      </ul>
    </nav>
  );
};

export default Navbar;
