import React, { Component } from 'react';
import './Footer.css';
import BlurText from "../Animations/BlurText";

const Footer = () => {
     const handleAnimationComplete = () => {
    console.log("Animation finished");
  };

    return ( <>
    
    <section className="heros-contact">
      <div className="heros-left">
        <p className="descriptions">
          I’m always open to meaningful conversations, creative collaborations,
          or new opportunities. Don’t hesitate to drop me a message — I’d love
          to hear from you.
        </p>

        <BlurText
  text="Partinia Boktor"
  delay={200}
  animateBy="letters"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>
        
      </div>

      <div className="heros-right">
        <h3>More Information :</h3>
        <ul>
          <li>Blog</li>
          <li>Activities</li>
          <li>Gallery</li>
        </ul>
      </div>
    </section>

    
    </> );
}
 
export default Footer;