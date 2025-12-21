import React from 'react';
import Nav from '../Components/Nav';
import './Uxdetail.css';
import zoo from '../Images/ux/giza zoo.png' ;
import figma from '../Images/figma.svg';
import zoomockup1 from '../Images/ux/zoo mockup 1.png'
import zoomockup2 from '../Images/ux/zoo mockup 2.png'
import BlurText from "../Animations/BlurText";
import Footer from '../Components/Footer';

const Uxdetail = () => {
    const handleAnimationComplete = () => {
    console.log("Animation finished");
  };
  return (
    <>
      <Nav />

   <BlurText
        text="Giza zoo website"
        delay={200}
        animateBy="letters"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />  

      <section className="projectPage10">
        {/* Hero Section */}
        <div className="heroSection10">
          <span className="yearLabel10">2025</span>

          <div className="heroImageWrapper10">
            <img
              src={zoo}
              alt="World Wild Life"
              className="heroImage10"
            />
          </div>
        </div>

        {/* Overview Section */}
        <div className="overviewSection10">
          <div className="overviewLeft10">
            <h3 className="overviewTitle10">1- Project overview</h3>
            <p className="overviewText10">
              The Shadia Coloring Poster is a digitally illustrated artwork created
              using Adobe Illustrator, designed to transform a real image of Shadia
              into a stylized, line-art composition suitable for coloring.
            </p>

            <h3 className="overviewTitle10">2- Tools i used</h3>
            <div className="toolItem10">
              <img src={figma} alt="Figma" className="toolIcon10" />
              <span className="toolName10">Figma</span>
            </div>
          </div>

          <div className="overviewRight10">
            <p className="sideItem10">
              <strong>3- My role:</strong><br />UX/UI Designer
            </p>
            <p className="sideItem10">
              <strong>4- Scope</strong><br />Websites
            </p>
            <p className="sideItem10">
              <strong>5- Time-frame</strong><br />4 weeks
            </p>
          </div>
        </div>

        {/* Mockups */}
        <div className="mockupsSection10">
          <BlurText
        text="Mockups"
        delay={200}
        animateBy="letters"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />  

          <div className="mockupsGrid10">
            <div className="mockupImageWrapper10">
              <img
                src={zoomockup1}
                alt="Mockup 1"
                className="mockupImage10"
              />
            </div>

            <div className="mockupImageWrapper10">
              <img
                src={zoomockup2}
                alt="Mockup 2"
                className="mockupImage10"
              />
            </div>
          </div>
        </div>
      </section>

<Footer />
    </>
  );
};

export default Uxdetail;
