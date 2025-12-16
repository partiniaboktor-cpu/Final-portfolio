import React, { Component } from 'react';
import WhiteNav from '../Components/WhiteNav';
import '../Pages/Graphicdetail.css';
import shadia from '../Images/shadia.png' ;
import texture from '../Images/darkbackground.svg' ;
import BlurText from "../Animations/BlurText";
import shadia2 from '../Images/shadia2.png' ;
import whitetexture from '../Images/lightbackground.svg' ;
import Footer from '../Components/Footer';

const Graphicdetail = () => {


    const handleAnimationComplete = () => {
    console.log("Animation finished");
  };
    return ( <>
    
    <WhiteNav />
    

     <section
      className="project-section7"
      style={{ backgroundImage: `url(${texture})` }}
    >
      {/* Top right link */}
   

      {/* Title */}
    

   <BlurText
        text="Shadia poster"
        delay={200}
        animateBy="letters"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />

      <div className="content7">
        {/* Left */}
        <div className="left7">
          <h2 className="overview-title7">- Project overview</h2>
          <p className="text7">
            The Shadia Coloring Poster is a digitally illustrated artwork created
            using Adobe Illustrator, designed to transform a real image of
            Shadia into a stylized, line-art composition suitable for coloring.
            The project focuses on simplifying complex visual details while
            preserving character identity, resulting in a clean, balanced, and
            visually engaging coloring poster.
          </p>

          <h2 className="tools-title7">2- Tools i used</h2>

          <div className="tool7">
            <span className="ai7">Ai</span>
            <span className="tool-name7">Adobe Illustrator</span>
          </div>
        </div>

        {/* Center Image */}
        <div className="center7">
          <img
            src={shadia}
            alt="Shadia Poster"
            className="image7"
          />
        </div>

        {/* Right */}
        <div className="right7">
          <p className="info7">
            <strong>3- My role:</strong>
            <br />
            Graphic designer
          </p>

          <p className="info7">
            <strong>4- Scope</strong>
            <br />
            Posters
          </p>

          <p className="info7">
            <strong>5- Time-frame</strong>
            <br />
            3 weeks
          </p>
        </div>
      </div>
    </section>
    
   <section
      className="mockups-section7"
      style={{ backgroundImage: `url(${whitetexture})` }}
    >
      <BlurText
        text="Mockups"
        delay={200}
        animateBy="letters"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />

      <div className="mockups-grid7">
        <div className="mockup-card7">
          <img src={shadia} alt="Mockup dark version" />
        </div>

        <div className="mockup-card7">
          <img src={shadia2} alt="Mockup color version" />
        </div>
      </div>
    </section>


<Footer />
    
    </> );
}
 
export default Graphicdetail;