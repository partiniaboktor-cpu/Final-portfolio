// import React, { Component } from 'react';
// import Nav from '../Components/Nav';
// import lightbackground from '../Images/lightbackground.svg';


// const Home = () => {
//     return ( <>
//     <div className="body" style={{ backgroundImage: `url(${lightbackground.svg})` }}>

//     <Nav />
    
    
    
    
    
    
//     </div>
//     </> );
// }
 
// export default Home;


import React from "react";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
    </>
  );
};

export default Home;
