import React, { Component } from 'react';
import Nav from "../Components/WhiteNav" ;
import './About.css';
import myImg from "../Images/myImg.png" ;
import BlurText from "../Animations/BlurText";

const handleAnimationComplete = () => {
    return ( <>
    
    <Nav />

<div className="hero">
      <div className="hero-left">
                <BlurText
  text="Hello"
  delay={200}
  animateBy="letters"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>
        <BlurText
  text=" I'm Partinia"
  delay={200}
  animateBy="letters"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>

        <p className="hero-text">
          Highly motivated and creative Entry Level Web Designer with a strong
          passion for creating visually appealing and user-friendly websites.
          Skilled in responsive design, wireframing, and optimizing website
          performance to drive increased traffic and conversion rates.
        </p>

        <div className="stars star2">✦</div>
      </div>

      <div className="hero-right">
        <div className="img-wrapper">
          <img src={myImg} alt="Partinia" className="heros-img" />

          <span className="tag date">24 March 2005</span>
          <span className="tag city">Cairo, Egypt</span>
        </div>

      

        <div className="stars star1">✦</div>
      </div>
    </div>


    
    </> );
}
 
export default handleAnimationComplete;